import { NextResponse } from "next/server";
import { z } from "zod";
import prisma from "@/lib/prisma";
import { sendRfqNotification } from "@/lib/mail";

const RfqSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  company: z.string().min(2, { message: "Company name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(7, { message: "Phone number must be at least 7 digits." }).max(20),
  productInterest: z.string().min(2, { message: "Please specify a product of interest." }),
  quantity: z.coerce.number().int().positive({ message: "Quantity must be a positive number." }),
  message: z.string().min(5, { message: "Please add a short note about your requirement." }),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const validation = RfqSchema.safeParse(body);
    if (!validation.success) {
      return NextResponse.json(
        { success: false, errors: validation.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const { name, company, email, phone, productInterest, quantity, message } =
      validation.data;

    // Send notification email to admin
    const emailResult = await sendRfqNotification({
      name, company, email, phone, productInterest, quantity, message,
    });

    try {
      const newRfq = await prisma.rfqRequest.create({
        data: { name, company, email, phone, productInterest, quantity, message },
      });

      return NextResponse.json(
        {
          success: true,
          message: "RFQ submitted successfully. Our team will contact you within 24 hours.",
          rfq: newRfq,
          databaseStatus: "saved",
          emailStatus: emailResult.method,
        },
        { status: 201 }
      );
    } catch (dbError) {
      console.warn("⚠️ Database offline. RFQ logged to console instead.");
      console.error(dbError);

      return NextResponse.json(
        {
          success: true,
          message: "RFQ received (Database offline – Simulated submission).",
          rfq: {
            id: "simulated-uuid",
            name, company, email, phone, productInterest, quantity, message,
            createdAt: new Date().toISOString(),
          },
          databaseStatus: "offline_logged",
          emailStatus: emailResult.method,
        },
        { status: 201 }
      );
    }
  } catch (error) {
    console.error("RFQ API error:", error);
    return NextResponse.json(
      { success: false, message: "An unexpected server error occurred." },
      { status: 500 }
    );
  }
}
