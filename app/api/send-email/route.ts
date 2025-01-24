import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  // Add CORS headers
  const headers = new Headers({
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  });

  // Handle preflight request
  if (req.method === "OPTIONS") {
    return new NextResponse(null, { headers });
  }

  const { name, email, phone, subject, message } = await req.json();

  // Create a transporter using SMTP
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number.parseInt(process.env.SMTP_PORT || "587"),
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  // Email to admin
  const adminMailOptions = {
    from: process.env.SMTP_FROM,
    to: "mugabimoses07@gmail.com",
    subject: `New Contact Form Submission: ${subject}`,
    text: `
      Name: ${name}
      Email: ${email}
      Phone: ${phone || "Not provided"}
      Subject: ${subject}
      Message: ${message}
    `,
  };

  // Email to user
  const userMailOptions = {
    from: process.env.SMTP_FROM,
    to: email,
    subject: "Thank you for contacting Dental Solutions Kampala",
    text: `
      Dear ${name},

      Thank you for contacting Dental Solutions Kampala. We have received your message and will get back to you as soon as possible.

      Best regards,
      Dental Solutions Kampala Team
    `,
  };

  try {
    await transporter.sendMail(adminMailOptions);
    await transporter.sendMail(userMailOptions);
    return NextResponse.json({ success: true }, { headers });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ success: false }, { status: 500, headers });
  }
}
