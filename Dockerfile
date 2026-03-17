# ── Stage 1: Dependencies ────────────────────────────────────────────────────
FROM node:22-alpine AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

# ── Stage 2: Build ───────────────────────────────────────────────────────────
FROM node:22-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Build args become env vars at build time (needed for static generation)
ARG GEMINI_API_KEY=""
ARG RESEND_API_KEY=""
ARG EMAIL_FROM=""
ARG KURTIS_EMAIL=""
ARG GOOGLE_SERVICE_ACCOUNT_KEY=""
ARG GOOGLE_SHEET_ID=""
ARG GOOGLE_DRIVE_FOLDER_ID=""
ARG GOOGLE_SHARED_DRIVE_ID=""

ENV GEMINI_API_KEY=$GEMINI_API_KEY
ENV RESEND_API_KEY=$RESEND_API_KEY
ENV EMAIL_FROM=$EMAIL_FROM
ENV KURTIS_EMAIL=$KURTIS_EMAIL
ENV GOOGLE_SERVICE_ACCOUNT_KEY=$GOOGLE_SERVICE_ACCOUNT_KEY
ENV GOOGLE_SHEET_ID=$GOOGLE_SHEET_ID
ENV GOOGLE_DRIVE_FOLDER_ID=$GOOGLE_DRIVE_FOLDER_ID
ENV GOOGLE_SHARED_DRIVE_ID=$GOOGLE_SHARED_DRIVE_ID

RUN npm run build

# ── Stage 3: Production runner ───────────────────────────────────────────────
FROM node:22-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV HOSTNAME=0.0.0.0
ENV PORT=3000

RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs
EXPOSE 3000

CMD ["node", "server.js"]
