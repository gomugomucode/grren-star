import nodemailer from "nodemailer";

interface SendRfqNotificationParams {
  name: string;
  company: string;
  email: string;
  phone: string;
  productInterest: string;
  quantity: number;
  message: string;
}

export async function sendRfqNotification({
  name, company, email, phone, productInterest, quantity, message,
}: SendRfqNotificationParams) {
  const host = process.env.SMTP_HOST;
  const port = parseInt(process.env.SMTP_PORT || "587", 10);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const adminEmail = process.env.ADMIN_EMAIL || "admin@apexautomation.com";

  const isSMTPConfigured =
    host && host !== "smtp.mailtrap.io" &&
    user && user !== "placeholder_user" &&
    pass && pass !== "placeholder_password";

  const emailBodyHTML = `
    <div style="font-family: Arial, sans-serif; max-width: 640px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 6px; overflow: hidden;">
      <div style="background: #1e40af; padding: 20px 24px;">
        <h2 style="color: #ffffff; margin: 0; font-size: 18px;">📋 New RFQ Submission — Apex Automation</h2>
      </div>
      <div style="padding: 24px; background: #ffffff;">
        <table style="width: 100%; border-collapse: collapse;">
          <tr style="background: #f8fafc;"><td style="padding: 10px 12px; border: 1px solid #e2e8f0; font-weight: 600; width: 35%; color: #1e293b;">Contact Name</td><td style="padding: 10px 12px; border: 1px solid #e2e8f0; color: #475569;">${name}</td></tr>
          <tr><td style="padding: 10px 12px; border: 1px solid #e2e8f0; font-weight: 600; color: #1e293b;">Company</td><td style="padding: 10px 12px; border: 1px solid #e2e8f0; color: #475569;">${company}</td></tr>
          <tr style="background: #f8fafc;"><td style="padding: 10px 12px; border: 1px solid #e2e8f0; font-weight: 600; color: #1e293b;">Email</td><td style="padding: 10px 12px; border: 1px solid #e2e8f0; color: #475569;"><a href="mailto:${email}" style="color: #1e40af;">${email}</a></td></tr>
          <tr><td style="padding: 10px 12px; border: 1px solid #e2e8f0; font-weight: 600; color: #1e293b;">Phone</td><td style="padding: 10px 12px; border: 1px solid #e2e8f0; color: #475569;">${phone}</td></tr>
          <tr style="background: #f8fafc;"><td style="padding: 10px 12px; border: 1px solid #e2e8f0; font-weight: 600; color: #1e293b;">Product Interest</td><td style="padding: 10px 12px; border: 1px solid #e2e8f0; color: #475569;">${productInterest}</td></tr>
          <tr><td style="padding: 10px 12px; border: 1px solid #e2e8f0; font-weight: 600; color: #1e293b;">Quantity Required</td><td style="padding: 10px 12px; border: 1px solid #e2e8f0; color: #475569;">${quantity} units</td></tr>
          <tr style="background: #f8fafc;"><td style="padding: 10px 12px; border: 1px solid #e2e8f0; font-weight: 600; color: #1e293b; vertical-align: top;">Requirements</td><td style="padding: 10px 12px; border: 1px solid #e2e8f0; color: #475569; white-space: pre-wrap;">${message}</td></tr>
        </table>
      </div>
      <div style="background: #f1f5f9; padding: 14px 24px; border-top: 1px solid #e2e8f0; font-size: 12px; color: #64748b;">
        Sent automatically by Apex Automation RFQ System · Respond within 24 business hours
      </div>
    </div>
  `;

  if (isSMTPConfigured) {
    try {
      const transporter = nodemailer.createTransport({ host, port, auth: { user, pass } });
      await transporter.sendMail({
        from: `"Apex Automation RFQ" <${user}>`,
        to: adminEmail,
        subject: `New RFQ: ${productInterest} – ${company} (Qty: ${quantity})`,
        text: `RFQ from ${name} (${company})\nEmail: ${email}\nPhone: ${phone}\nProduct: ${productInterest}\nQty: ${quantity}\nMessage: ${message}`,
        html: emailBodyHTML,
      });
      console.log(`[SMTP] RFQ notification sent to ${adminEmail}`);
      return { success: true, method: "smtp" };
    } catch (error) {
      console.error("[SMTP Error]", error);
    }
  }

  // Console fallback
  console.log("=".repeat(70));
  console.log("📋 SIMULATED RFQ ADMIN EMAIL (SMTP not configured)");
  console.log(`To: ${adminEmail}`);
  console.log(`Subject: New RFQ: ${productInterest} – ${company} (Qty: ${quantity})`);
  console.log(`Name: ${name} | Company: ${company}`);
  console.log(`Email: ${email} | Phone: ${phone}`);
  console.log(`Product Interest: ${productInterest} | Quantity: ${quantity}`);
  console.log(`Requirements: ${message}`);
  console.log("=".repeat(70));

  return { success: true, method: "console" };
}

interface SendLeadNotificationParams {
  name: string;
  email: string;
  phone: string;
  businessType: string;
  message: string;
}

export async function sendLeadNotification({
  name,
  email,
  phone,
  businessType,
  message,
}: SendLeadNotificationParams) {
  const host = process.env.SMTP_HOST;
  const port = parseInt(process.env.SMTP_PORT || "587", 10);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const adminEmail = process.env.ADMIN_EMAIL || "info@silvergreenautomations.in";

  const isSMTPConfigured =
    host &&
    host !== "smtp.mailtrap.io" &&
    user &&
    user !== "placeholder_user" &&
    pass &&
    pass !== "placeholder_password";

  if (isSMTPConfigured) {
    try {
      const transporter = nodemailer.createTransport({ host, port, auth: { user, pass } });
      await transporter.sendMail({
        from: `"Silver Green Automations" <${user}>`,
        to: adminEmail,
        subject: `New Enquiry: ${businessType} – ${name}`,
        text: `Enquiry from ${name}\nEmail: ${email}\nPhone: ${phone}\nProduct: ${businessType}\nMessage: ${message}`,
        html: `<p><strong>${name}</strong> (${email}, ${phone})</p><p><strong>Product:</strong> ${businessType}</p><p>${message}</p>`,
      });
      return { success: true, method: "smtp" };
    } catch (error) {
      console.error("[SMTP Error]", error);
    }
  }

  console.log("=".repeat(70));
  console.log("📋 SIMULATED ENQUIRY EMAIL (SMTP not configured)");
  console.log(`To: ${adminEmail}`);
  console.log(`Name: ${name} | Email: ${email} | Phone: ${phone}`);
  console.log(`Product: ${businessType}`);
  console.log(`Message: ${message}`);
  console.log("=".repeat(70));

  return { success: true, method: "console" };
}
