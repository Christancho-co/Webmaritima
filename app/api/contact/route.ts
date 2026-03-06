import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { name, email, message, phone } = await req.json();

  try {
    await resend.emails.send({
      from: 'Maritima Boats <onboarding@resend.dev>',
      to: 'cristancho.co@gmail.com', // ← cambia esto
      subject: `Nuevo contacto de ${name}`,
      html: `
        <h2>Nuevo mensaje de contacto</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Teléfono:</strong> ${phone}</p>
        <p><strong>Mensaje:</strong> ${message}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Error al enviar' }, { status: 500 });
  }
}
