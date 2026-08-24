/**
 * Resend email service for contact form notifications.
 * Used exclusively in API routes — never imported in client components.
 *
 * Implementation: Phase 10
 */
export async function sendContactNotification(
  _data: Record<string, unknown>,
): Promise<void> {
  throw new Error(
    "Resend email service is not configured yet. Implementation planned for Phase 10.",
  );
}

export function isResendConfigured(): boolean {
  return Boolean(process.env.RESEND_API_KEY);
}
