import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { fullName, email, subject, preferredModel, message } = await req.json();

  try {
    await resend.emails.send({
      from: 'Maritima Boats <onboarding@resend.dev>',
      to: 'cristancho.co@gmail.com',
      subject: `Nuevo contacto de ${fullName} - ${subject || 'Sin asunto'}`,
      html: `
        <h2>Nuevo mensaje de contacto</h2>
        <p><strong>Nombre:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Asunto:</strong> ${subject || 'No especificado'}</p>
        <p><strong>Modelo de interés:</strong> ${preferredModel || 'No especificado'}</p>
        <p><strong>Mensaje:</strong> ${message}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Error al enviar' }, { status: 500 });
  }
}
