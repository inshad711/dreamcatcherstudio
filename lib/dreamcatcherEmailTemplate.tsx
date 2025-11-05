export const dreamcatcherEmailTemplate = ({
  name,
  email,
  phone,
  subject,
  message,
}: {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}) => {
  const esc = (str: string) =>
    String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");

  const infoRow = (label: string, value?: string) => {
    if (!value) return "";
    return `
      <tr>
        <td style="padding:6px 0;color:#aaaaaa;font-size:13px;width:120px;vertical-align:top;">${esc(
          label
        )}</td>
        <td style="padding:6px 0;color:#ffffff;font-size:14px;font-weight:600;vertical-align:top;">${esc(
          value
        )}</td>
      </tr>
    `;
  };

  return `
  <!doctype html>
  <html>
    <body style="margin:0;padding:0;background:#111;font-family:Arial,sans-serif;color:#fff;">
      <table width="100%" style="padding:20px;">
        <tr>
          <td align="center">
            <table width="100%" style="max-width:600px;background:#1c1c1c;border-radius:12px;overflow:hidden;box-shadow:0 6px 20px rgba(0,0,0,0.4);">

              <!-- Header -->
              <tr>
                <td style="background:#000;padding:20px;border-bottom:1px solid #333;">
                  <table width="100%">
                    <tr>
                      <td>
                        <img src="/logo/logo2.png"
                          alt="DreamCatcher Studio"
                          style="max-width:120px;height:auto;" />
                      </td>
                      <td align="right">
                        <span style="background:#E8B84E;padding:8px 14px;border-radius:999px;color:#000;font-weight:bold;font-size:12px;">
                          New Contact Request
                        </span>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>

              <!-- Title -->
              <tr>
                <td style="padding:20px;">
                  <h2 style="margin:0;font-size:20px;font-weight:600;color:#fff;">${esc(
                    subject || "New Contact Form Message"
                  )}</h2>
                  <p style="margin-top:6px;color:#aaa;font-size:13px;">
                    You received a new message from your website contact form.
                  </p>
                </td>
              </tr>

              <!-- Details -->
              <tr>
                <td style="padding:0 20px;">
                  <table width="100%" style="border-collapse:collapse;">
                    ${infoRow("Name", name)}
                    ${infoRow("Email", email)}
                    ${infoRow("Phone", phone)}
                  </table>
                </td>
              </tr>

              <!-- Message -->
              <tr>
                <td style="padding:18px 20px;">
                  <div style="background:#121212;border:1px solid #333;border-radius:10px;padding:16px;">
                    <div style="color:#E8B84E;font-size:13px;margin-bottom:8px;font-weight:bold;">Message</div>
                    <div style="white-space:pre-wrap;font-size:14px;line-height:1.6;color:#efefef;">${esc(
                      message || "No message provided."
                    )}</div>
                  </div>
                </td>
              </tr>

              <!-- CTA -->
              <tr>
                <td style="padding:20px;">
                  <a href="mailto:${esc(email)}"
                    style="display:inline-block;background:#E8B84E;color:#111;text-decoration:none;padding:12px 18px;border-radius:8px;font-size:13px;font-weight:bold;">
                    Reply to Email
                  </a>
                  ${
                    phone
                      ? `<a href="tel:${esc(phone)}"
                      style="margin-left:10px;display:inline-block;background:#333;color:#fff;text-decoration:none;padding:12px 18px;border-radius:8px;font-size:13px;font-weight:bold;">
                      Call Now
                    </a>`
                      : ""
                  }
                </td>
              </tr>

              <!-- Footer -->
              <tr>
                <td style="padding:14px 20px;border-top:1px solid #333;text-align:center;color:#777;font-size:11px;">
                  © ${new Date().getFullYear()} DreamCatcher Studio — Mumbai<br>
                  This message was sent from your website.
                </td>
              </tr>

            </table>
          </td>
        </tr>
      </table>
    </body>
  </html>`;
};
