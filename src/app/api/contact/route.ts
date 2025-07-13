import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  const { name, email, comment } = await request.json();

  // Configure your SMTP transport (use environment variables in production)
  const transporter = nodemailer.createTransport({
    host: 'smtp.hostinger.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.SMTP_USER, // your email
      pass: process.env.SMTP_PASS, // your email password or app password
    },
  });

  try {
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.CONTACT_RECEIVER || process.env.SMTP_USER, // receiver email
      replyTo: email,
      subject: `Nuevo mensaje de contacto de ${name}`,
      text: `Nombre: ${name}\nEmail: ${email}\nComentario: ${comment}`,
      html: `<p><strong>Nombre:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Comentario:</strong><br/>${comment}</p>`
    });
    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json({ ok: false, error: (error as Error).message }, { status: 500 });
  }
}
