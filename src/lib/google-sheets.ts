import { google } from "googleapis"

// ─── Auth ────────────────────────────────────────────────────────────────────

function getAuth() {
  const key = process.env.GOOGLE_SERVICE_ACCOUNT_KEY
  if (!key) return null

  const credentials = JSON.parse(key)
  return new google.auth.GoogleAuth({
    credentials,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  })
}

// ─── Append row ──────────────────────────────────────────────────────────────

export async function appendToSheet(
  sheetName: string,
  values: (string | number)[],
) {
  const spreadsheetId = process.env.GOOGLE_SHEET_ID
  const auth = getAuth()

  if (!auth || !spreadsheetId) {
    console.warn(
      "[google-sheets] Missing GOOGLE_SERVICE_ACCOUNT_KEY or GOOGLE_SHEET_ID — skipping.",
    )
    return
  }

  const sheets = google.sheets({ version: "v4", auth })

  await sheets.spreadsheets.values.append({
    spreadsheetId,
    range: `${sheetName}!A:A`,
    valueInputOption: "USER_ENTERED",
    insertDataOption: "INSERT_ROWS",
    requestBody: { values: [values] },
  })
}

// ─── Form-specific helpers ───────────────────────────────────────────────────

export async function logContactLead(data: {
  name: string
  email: string
  business: string
  enquiryType: string
  message: string
}) {
  const timestamp = new Date().toISOString()
  await appendToSheet("Contacts", [
    timestamp,
    data.name,
    data.email,
    data.business,
    data.enquiryType,
    data.message,
    "Contact Form",
  ])
}

export async function logEmailCapture(data: {
  email: string
  source: string
  context?: string
}) {
  const timestamp = new Date().toISOString()
  await appendToSheet("Subscribers", [
    timestamp,
    data.email,
    data.source,
    data.context || "",
  ])
}

export async function logAssessmentLead(data: {
  name: string
  email: string
  businessName: string
  industry: string
  teamSize: string
  businessAge: string
  adminHours: string
  biggestPainDescription: string
  biggestBottleneck: string
  timeConsumingTasks: string[]
  currentTools: string[]
  currentAutomation: string[]
  businessGoals: string[]
  extraTimeUse: string
  taskTracking: string
  processConsistency: string
}) {
  const timestamp = new Date().toISOString()
  await appendToSheet("Assessments", [
    timestamp,
    data.name,
    data.email,
    data.businessName,
    data.industry,
    data.teamSize,
    data.businessAge,
    data.adminHours,
    data.biggestPainDescription,
    data.biggestBottleneck,
    data.timeConsumingTasks.join(", "),
    data.currentTools.join(", "),
    data.currentAutomation.join(", "),
    data.businessGoals.join(", "),
    data.extraTimeUse,
    data.taskTracking,
    data.processConsistency,
    "Assessment Quiz",
  ])
}
