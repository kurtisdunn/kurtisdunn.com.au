import { NextResponse } from "next/server"
import { logEmailCapture } from "@/lib/google-sheets"

export async function POST(request: Request) {
  try {
    const { email, source, context } = await request.json()

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Valid email required" },
        { status: 400 },
      )
    }

    await logEmailCapture({
      email,
      source: source || "unknown",
      context: context || "",
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("[subscribe] error:", error)
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 },
    )
  }
}
