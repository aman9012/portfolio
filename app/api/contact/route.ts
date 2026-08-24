import { NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validations";
import type { ContactFormResponse } from "@/types/contact";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = contactFormSchema.safeParse(body);

    if (!result.success) {
      const response: ContactFormResponse = {
        success: false,
        message: result.error.issues[0]?.message ?? "Invalid form data",
      };
      return NextResponse.json(response, { status: 400 });
    }

    // Phase 10: spam protection → Firestore → Resend
    const response: ContactFormResponse = {
      success: false,
      message:
        "Contact form backend is not yet configured. Implementation planned for Phase 10.",
    };
    return NextResponse.json(response, { status: 501 });
  } catch {
    const response: ContactFormResponse = {
      success: false,
      message: "An unexpected error occurred. Please try again later.",
    };
    return NextResponse.json(response, { status: 500 });
  }
}
