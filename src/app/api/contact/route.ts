import { NextResponse } from "next/server"
import { Resend } from "resend"
import { logContactLead } from "@/lib/google-sheets"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, business, enquiryType, message } = body

    if (!name || !email || !enquiryType || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      )
    }

    // Log to Google Sheets (non-blocking)
    logContactLead({ name, email, business, enquiryType, message }).catch(
      (err) => console.error("[contact] Google Sheets error:", err),
    )

    const emailFrom = process.env.EMAIL_FROM
    const kurtisEmail = process.env.KURTIS_EMAIL

    if (!emailFrom || !kurtisEmail) {
      console.error("Missing EMAIL_FROM or KURTIS_EMAIL env vars")
      return NextResponse.json(
        { error: "Server configuration error" },
        { status: 500 },
      )
    }

    // Send notification to Kurtis
    await resend.emails.send({
      from: `Kurtis Dunn Website <${emailFrom}>`,
      to: kurtisEmail,
      replyTo: email,
      subject: `New enquiry: ${enquiryType} — ${name}`,
      html: buildNotificationEmail({ name, email, business, enquiryType, message }),
    })

    // Send confirmation to the user
    await resend.emails.send({
      from: `Kurtis Dunn <${emailFrom}>`,
      to: email,
      subject: "Thanks for getting in touch",
      html: buildConfirmationEmail(name),
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 },
    )
  }
}

function emailShell(preheader: string, bodyContent: string): string {
  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"></head>
<body style="margin:0;padding:0;background-color:#F3F4F6;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
<span style="display:none;max-height:0;overflow:hidden;">${preheader}${"&zwnj; ".repeat(40)}</span>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#F3F4F6;">
<tr><td align="center" style="padding:24px 16px;">
<table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">
<!-- Logo bar -->
<tr><td style="background-color:#0D7377;padding:20px 32px;border-radius:8px 8px 0 0;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0">
<tr>
<td><span style="font-size:20px;font-weight:700;color:#ffffff;">Kurtis Dunn</span><br><span style="font-size:13px;color:rgba(255,255,255,0.8);">Business Automation &amp; AI</span></td>
<td align="right"><a href="https://kurtisdunn.com.au" style="font-size:13px;color:rgba(255,255,255,0.8);text-decoration:none;">kurtisdunn.com.au</a></td>
</tr>
</table>
</td></tr>
<!-- Body -->
<tr><td style="background-color:#ffffff;padding:32px;border-radius:0 0 8px 8px;">
${bodyContent}
</td></tr>
<!-- Footer -->
<tr><td style="padding:16px 32px;text-align:center;">
<p style="margin:0;font-size:12px;color:#6B7280;">Kurtis Dunn &middot; Business Automation Consulting &middot; ABN 69 866 882 083</p>
<p style="margin:4px 0 0;font-size:12px;color:#6B7280;"><a href="https://kurtisdunn.com.au" style="color:#0D7377;text-decoration:none;">kurtisdunn.com.au</a> &middot; <a href="mailto:kurtis@kurtisdunn.com.au" style="color:#0D7377;text-decoration:none;">kurtis@kurtisdunn.com.au</a></p>
</td></tr>
</table>
</td></tr>
</table>
</body>
</html>`
}

function buildNotificationEmail(data: {
  name: string
  email: string
  business: string
  enquiryType: string
  message: string
}): string {
  return emailShell(
    `New enquiry from ${data.name} — ${data.enquiryType}`,
    `
<h2 style="margin:0 0 16px;font-size:20px;color:#111827;">New Contact Form Enquiry</h2>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:20px;">
<tr><td style="padding:8px 0;border-bottom:1px solid #E5E7EB;font-size:13px;color:#6B7280;width:120px;">Name</td><td style="padding:8px 0;border-bottom:1px solid #E5E7EB;font-size:14px;color:#111827;">${escapeHtml(data.name)}</td></tr>
<tr><td style="padding:8px 0;border-bottom:1px solid #E5E7EB;font-size:13px;color:#6B7280;">Email</td><td style="padding:8px 0;border-bottom:1px solid #E5E7EB;font-size:14px;color:#111827;"><a href="mailto:${escapeHtml(data.email)}" style="color:#0D7377;">${escapeHtml(data.email)}</a></td></tr>
<tr><td style="padding:8px 0;border-bottom:1px solid #E5E7EB;font-size:13px;color:#6B7280;">Business</td><td style="padding:8px 0;border-bottom:1px solid #E5E7EB;font-size:14px;color:#111827;">${data.business ? escapeHtml(data.business) : "—"}</td></tr>
<tr><td style="padding:8px 0;border-bottom:1px solid #E5E7EB;font-size:13px;color:#6B7280;">Enquiry type</td><td style="padding:8px 0;border-bottom:1px solid #E5E7EB;font-size:14px;color:#111827;">${escapeHtml(data.enquiryType)}</td></tr>
</table>
<div style="background-color:#F9FAFB;border-left:3px solid #0D7377;padding:16px;border-radius:4px;">
<p style="margin:0 0 4px;font-size:12px;font-weight:600;color:#6B7280;text-transform:uppercase;">Message</p>
<p style="margin:0;font-size:14px;color:#374151;line-height:1.6;white-space:pre-wrap;">${escapeHtml(data.message)}</p>
</div>
<p style="margin:20px 0 0;font-size:13px;color:#6B7280;">Reply directly to this email to respond to ${escapeHtml(data.name)}.</p>
`,
  )
}

function buildConfirmationEmail(name: string): string {
  return emailShell(
    "Thanks for getting in touch — I'll reply within one business day.",
    `
<h2 style="margin:0 0 16px;font-size:20px;color:#111827;">Thanks for reaching out, ${escapeHtml(name)}</h2>
<p style="margin:0 0 12px;font-size:15px;color:#374151;line-height:1.6;">I've received your message and will get back to you within one business day.</p>
<p style="margin:0 0 24px;font-size:15px;color:#374151;line-height:1.6;">In the meantime, if you'd like a head start, try the free Personalised Automation Plan — it takes about 4 minutes and I'll review your answers before we speak.</p>
<table role="presentation" cellpadding="0" cellspacing="0">
<tr><td style="background-color:#16A34A;border-radius:6px;">
<a href="https://kurtisdunn.com.au/assessment" style="display:inline-block;padding:12px 28px;font-size:15px;font-weight:600;color:#ffffff;text-decoration:none;">Get Your Free Automation Plan</a>
</td></tr>
</table>
<p style="margin:16px 0 0;font-size:13px;color:#6B7280;">Talk soon,<br>Kurtis</p>
`,
  )
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
}
