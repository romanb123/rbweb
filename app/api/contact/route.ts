import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json()

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 })
    }

    const resend = new Resend(process.env.RESEND_API_KEY)

    await resend.emails.send({
      from: 'RBweb <onboarding@resend.dev>',
      to: 'romaflz73@gmail.com',
      subject: `RBweb — הודעה חדשה מ-${name}`,
      replyTo: email,
      html: `
        <div style="font-family:sans-serif;max-width:580px;margin:0 auto;background:#fff;">
          <div style="background:#060606;padding:24px 28px;display:flex;align-items:center;gap:12px;">
            <div style="background:#c8ff00;width:36px;height:36px;border-radius:8px;display:inline-flex;align-items:center;justify-content:center;font-weight:800;font-size:14px;color:#060606;">RB</div>
            <span style="color:#f0f0f0;font-weight:700;font-size:18px;letter-spacing:-0.04em;">RBweb</span>
          </div>
          <div style="padding:32px 28px;background:#fafafa;border-bottom:1px solid #eee;">
            <h2 style="margin:0 0 24px;font-size:20px;color:#060606;">הודעה חדשה מהאתר</h2>
            <table style="width:100%;border-collapse:collapse;">
              <tr>
                <td style="padding:8px 0;font-size:13px;color:#999;width:80px;vertical-align:top;">שם</td>
                <td style="padding:8px 0;font-size:15px;color:#060606;font-weight:600;">${name}</td>
              </tr>
              <tr>
                <td style="padding:8px 0;font-size:13px;color:#999;vertical-align:top;">אימייל</td>
                <td style="padding:8px 0;font-size:15px;color:#060606;">
                  <a href="mailto:${email}" style="color:#060606;">${email}</a>
                </td>
              </tr>
              <tr>
                <td style="padding:8px 0;font-size:13px;color:#999;vertical-align:top;">הודעה</td>
                <td style="padding:8px 0;"></td>
              </tr>
            </table>
            <div style="background:#fff;border:1px solid #e5e5e5;border-radius:10px;padding:18px 20px;font-size:15px;color:#333;line-height:1.7;white-space:pre-wrap;">${message}</div>
          </div>
          <div style="padding:16px 28px;background:#f3f3f3;">
            <p style="margin:0;font-size:12px;color:#aaa;">נשלח מ-rbweb.amplifyapp.com</p>
          </div>
        </div>
      `,
    })

    return NextResponse.json({ ok: true })
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err)
    console.error('Mail error:', msg)
    return NextResponse.json({ error: 'Failed to send', detail: msg }, { status: 500 })
  }
}
