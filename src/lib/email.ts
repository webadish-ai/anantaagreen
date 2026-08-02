/**
 * Shared Resend sender for every form on the site (contact form, chatbot
 * lead capture, ...). Reads RESEND_API_KEY / ENQUIRY_FROM_EMAIL from the
 * environment; callers decide what to show the user when those aren't set.
 */
export async function sendEmail(opts: {
  to: string;
  replyTo?: string;
  subject: string;
  text: string;
}): Promise<{ ok: true } | { ok: false; reason: "not-configured" | "delivery-failed" }> {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.ENQUIRY_FROM_EMAIL;

  if (!apiKey || !from) {
    console.warn(
      "[email] RESEND_API_KEY / ENQUIRY_FROM_EMAIL not set — message not delivered.",
    );
    return { ok: false, reason: "not-configured" };
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [opts.to],
        reply_to: opts.replyTo,
        subject: opts.subject,
        text: opts.text,
      }),
    });

    if (!res.ok) {
      console.error("[email] delivery failed", res.status, await res.text());
      return { ok: false, reason: "delivery-failed" };
    }
  } catch (err) {
    console.error("[email] delivery threw", err);
    return { ok: false, reason: "delivery-failed" };
  }

  return { ok: true };
}
