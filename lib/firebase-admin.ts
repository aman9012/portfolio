/**
 * Firebase Admin SDK for server-side Firestore operations.
 * Used exclusively in API routes — never imported in client components.
 *
 * Implementation: Phase 10
 */
export async function getFirebaseAdmin() {
  throw new Error(
    "Firebase Admin is not configured yet. Implementation planned for Phase 10.",
  );
}

export async function saveContactSubmission(
  _data: Record<string, unknown>,
): Promise<string> {
  throw new Error(
    "Firestore contact persistence is not configured yet. Implementation planned for Phase 10.",
  );
}
