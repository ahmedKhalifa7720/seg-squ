import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  const body = await request.json();

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: 'a.seg.squ@gmail.com',
      pass: process.env.GMAIL_APP_PASSWORD
    }
  });

  try {
    await transporter.sendMail({
      from: '"SEG SQU Website" <a.seg.squ@gmail.com>',
      to: 'a.seg.squ@gmail.com',
      subject: `New Contact Form Message from ${body.name}`,
      text: `
Name: ${body.name}
Email: ${body.email}
Subject: ${body.subject}
Message: ${body.message}
      `,
      replyTo: body.email
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Failed to send email:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}