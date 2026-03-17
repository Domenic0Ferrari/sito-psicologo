import { Resend } from "resend";

type ContactPayload = {
  email: string;
  fullName: string;
  phone: string;
  message: string;
  consent: boolean;
};

const toEmail =
  process.env.RESEND_TO ?? "monicamastrella@hotmail.it";
const fromEmail = process.env.RESEND_FROM;

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return Response.json(
      { error: "Missing RESEND_API_KEY" },
      { status: 500 }
    );
  }
  if (!fromEmail) {
    return Response.json(
      { error: "Missing RESEND_FROM" },
      { status: 500 }
    );
  }

  let payload: ContactPayload;
  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return Response.json({ error: "Invalid payload" }, { status: 400 });
  }

  const email = payload.email?.trim();
  const fullName = payload.fullName?.trim();
  const phone = payload.phone?.trim();
  const message = payload.message?.trim();
  const consent = payload.consent === true;

  if (!email || !fullName || !phone || !message || !consent) {
    return Response.json({ error: "Missing fields" }, { status: 400 });
  }

  const resend = new Resend(apiKey);

  const subject = `Nuovo messaggio dal sito - ${fullName}`;
  const html = `
    <h2>Nuovo messaggio ricevuto dal sito</h2>
    <p><strong>Nome:</strong> ${fullName}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Telefono:</strong> ${phone}</p>
    <p><strong>Messaggio:</strong></p>
    <p>${message.replace(/\n/g, "<br/>")}</p>
  `;

  try {
    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      replyTo: email,
      subject,
      html,
    });

    if (error || !data?.id) {
      return Response.json({ error: "Send failed" }, { status: 500 });
    }

    return Response.json({ ok: true, id: data.id });
  } catch (error) {
    return Response.json({ error: "Send failed" }, { status: 500 });
  }
}
