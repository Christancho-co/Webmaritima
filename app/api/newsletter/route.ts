import { Resend } from 'resend';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { email } = await req.json();

  try {
    await resend.emails.send({
      from: 'Maritima Boats <onboarding@resend.dev>',
      to: 'cristancho.co@gmail.com', // ← cambia por tu correo
      subject: 'Nueva suscripción al newsletter',
      html: `<p>Nuevo suscriptor: <strong>${email}</strong></p>`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Error al suscribir' }, { status: 500 });
  }
}