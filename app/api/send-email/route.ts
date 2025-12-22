// app/api/send-email/route.ts
import { Resend } from "resend";

export async function POST(req: Request) {
    const { from, to, subject, html } = await req.json();
    const resend = new Resend(process.env.RESEND_API_KEY!);
    console.log("resend: ", resend)
    await resend.emails.send({
        from,
        to,
        subject,
        html,
    });

    return Response.json({ ok: true, from: from, to:to, subject:subject, html:html });
}
