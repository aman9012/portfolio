/**
 * Resend email service for contact form notifications.
 * Used exclusively in API routes — never imported in client components.
 */
import { Resend } from "resend";

interface ContactNotificationData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

function getResendClient(): Resend {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    throw new Error("RESEND_API_KEY is not configured.");
  }

  return new Resend(apiKey);
}

export async function sendContactNotification(
  data: ContactNotificationData,
): Promise<void> {
  const resend = getResendClient();

  const fromAddress = process.env.RESEND_FROM_EMAIL;
  const toAddress = process.env.CONTACT_RECEIVER_EMAIL;

  if (!fromAddress || !toAddress) {
    throw new Error(
      "RESEND_FROM_EMAIL and CONTACT_RECEIVER_EMAIL must be configured.",
    );
  }

  const { error } = await resend.emails.send({
    from: fromAddress,
    to: toAddress,
    replyTo: data.email,
    subject: `New contact form message: ${data.subject}`,
    text: `From: ${data.name} <${data.email}>\n\n${data.message}`,
    html: `
      <p><strong>From:</strong> ${escapeHtml(data.name)} (${escapeHtml(data.email)})</p>
      <p><strong>Subject:</strong> ${escapeHtml(data.subject)}</p>
      <p><strong>Message:</strong></p>
      <p>${escapeHtml(data.message).replace(/\n/g, "<br />")}</p>
    `,
  });

  if (error) {
    throw new Error(`Resend failed to send email: ${error.message}`);
  }
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export function isResendConfigured(): boolean {
  return Boolean(
    process.env.RESEND_API_KEY &&
      process.env.RESEND_FROM_EMAIL &&
      process.env.CONTACT_RECEIVER_EMAIL,
  );
}
