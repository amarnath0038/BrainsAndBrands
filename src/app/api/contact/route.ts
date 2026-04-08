import { NextResponse } from "next/server";
import { ContactSchema } from "@/lib/schema";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    
    // Validation
    const result = ContactSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json({ error: result.error.format() }, { status: 400 });
    }

    const { firstName, lastName, email, contact, service, comments } = result.data;

    
    await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>", 
      to: "gireeshgowd9@gmail.com",
      subject: `New Lead: ${service}`,
      text: `Name: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${contact}\nService: ${service}\nComments: ${comments}`,
    });

    return NextResponse.json({ message: "Email sent successfully!" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}