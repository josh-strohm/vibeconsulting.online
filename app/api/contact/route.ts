import { NextResponse } from "next/server";

import { contactSchema } from "@/lib/validations/contact";

const DEFAULT_N8N_WEBHOOK_URL =
  "https://n8n.strohmpartners.com/webhook/1e68af36-df55-4eec-a8e2-41bdbc4b227f";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    const fieldErrors: Record<string, string> = {};
    for (const issue of parsed.error.issues) {
      const key = issue.path[0];
      if (typeof key === "string" && !fieldErrors[key]) {
        fieldErrors[key] = issue.message;
      }
    }
    return NextResponse.json(
      { error: "Please fix the highlighted fields.", fieldErrors },
      { status: 400 }
    );
  }

  const payload = {
    ...parsed.data,
    company: parsed.data.company || undefined,
    submittedAt: new Date().toISOString(),
  };

  const webhookUrl =
    process.env.N8N_WEBHOOK_URL?.trim() || DEFAULT_N8N_WEBHOOK_URL;

  try {
    const upstream = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!upstream.ok) {
      console.error(
        "[contact] Webhook failed:",
        upstream.status,
        await upstream.text().catch(() => "")
      );
      return NextResponse.json(
        { error: "Could not deliver your message. Please try again shortly." },
        { status: 502 }
      );
    }
  } catch (err) {
    console.error("[contact] Webhook error:", err);
    return NextResponse.json(
      { error: "Could not reach the messaging service. Please try again." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
