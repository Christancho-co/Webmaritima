import { Resend } from 'resend';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { email, source } = await req.json();

    if (!email) {
      return NextResponse.json({ error: 'Email requerido' }, { status: 400 });
    }

    await resend.emails.send({
      from: 'Maritima Boats <onboarding@resend.dev>',
      to: 'cristancho.co@gmail.com',
      subject: '📧 Nueva suscripción al newsletter',
      html: `
        <h2>Nueva suscripción al Newsletter</h2>
        <p><strong>Email suscrito:</strong> ${email}</p>
        <p><strong>Desde:</strong> ${source || 'No especificado'}</p>
        <p><strong>Fecha:</strong> ${new Date().toLocaleString('es-CO', { timeZone: 'America/Bogota' })}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Newsletter error:', error);
    return NextResponse.json({ error: 'Error al suscribir' }, { status: 500 });
  }
}
