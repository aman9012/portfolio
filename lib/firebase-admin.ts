/**
 * Firebase Admin SDK for server-side Firestore operations.
 * Used exclusively in API routes — never imported in client components.
 *
 * Implementation: Phase 10
 */
import { cert, getApps, initializeApp } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

function getFirebaseAdminApp() {
  const existingApp = getApps()[0];

  if (existingApp) {
    return existingApp;
  }

  const projectId = process.env.FIREBASE_PROJECT_ID;
  const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
  const privateKey = process.env.FIREBASE_PRIVATE_KEY?.replace(
    /\\n/g,
    "\n",
  );

  if (!projectId || !clientEmail || !privateKey) {
    throw new Error(
      "Firebase Admin environment variables are not configured.",
    );
  }

  return initializeApp({
    credential: cert({
      projectId,
      clientEmail,
      privateKey,
    }),
  });
}

export function getFirebaseAdmin() {
  const app = getFirebaseAdminApp();

  return getFirestore(app);
}

export async function saveContactSubmission(
  data: Record<string, unknown>,
): Promise<string> {
  const db = getFirebaseAdmin();

  const document = await db.collection("contacts").add({
    ...data,
    createdAt: new Date(),
    status: "new",
  });

  return document.id;
}