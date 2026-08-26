import { NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validations";
import { saveContactSubmission } from "@/lib/firebase-admin";
import { sendContactNotification } from "@/lib/resend";
import type { ContactFormResponse } from "@/types/contact";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Honeypot field: bots tend to fill every input, real users never see or fill it.
    if (typeof body?.website === "string" && body.website.trim() !== "") {
      const response: ContactFormResponse = {
        success: true,
        message: "Thanks for reaching out — I'll get back to you shortly.",
      };
      return NextResponse.json(response, { status: 200 });
    }

    const result = contactFormSchema.safeParse(body);

    if (!result.success) {
      const response: ContactFormResponse = {
        success: false,
        message: result.error.issues[0]?.message ?? "Invalid form data",
      };
      return NextResponse.json(response, { status: 400 });
    }

    // 1. Persist the lead to Firestore first, so we never lose a submission
    //    even if the email step fails.
    await saveContactSubmission(result.data);

    // 2. Send the email notification via Resend. If this fails, the
    //    submission is still saved in Firestore, so we log and continue
    //    rather than tell the visitor their message was lost.
    try {
      await sendContactNotification(result.data);
    } catch (emailError) {
      console.error("Resend notification failed:", emailError);
    }

    const response: ContactFormResponse = {
      success: true,
      message: "Thanks for reaching out — I'll get back to you shortly.",
    };
    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    console.error("Contact form submission failed:", error);
    const response: ContactFormResponse = {
      success: false,
      message: "An unexpected error occurred. Please try again later.",
    };
    return NextResponse.json(response, { status: 500 });
  }
}
