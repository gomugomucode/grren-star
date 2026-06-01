import nodemailer from "nodemailer";

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
  const adminEmail = process.env.ADMIN_EMAIL || "admin@example.com";

  // Check if SMTP is configured (and not using default placeholder values)
  const isSMTPConfigured =
    host &&
    host !== "smtp.mailtrap.io" && // Mailtrap placeholder check
    user &&
    user !== "placeholder_user" &&
    pass &&
    pass !== "placeholder_password";

  const emailBodyHTML = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px; background-color: #ffffff;">
      <h2 style="color: #4f46e5; border-bottom: 2px solid #f3f4f6; padding-bottom: 10px; margin-top: 0;">New Lead Inquiry</h2>
      <p style="font-size: 16px; color: #1f2937;">A new lead has submitted a request from the AI Automation Agency website.</p>
      
      <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
        <tr style="background-color: #f9fafb;">
          <td style="padding: 10px; border: 1px solid #e5e7eb; font-weight: bold; width: 30%; color: #374151;">Full Name:</td>
          <td style="padding: 10px; border: 1px solid #e5e7eb; color: #4b5563;">${name}</td>
        </tr>
        <tr>
          <td style="padding: 10px; border: 1px solid #e5e7eb; font-weight: bold; color: #374151;">Email:</td>
          <td style="padding: 10px; border: 1px solid #e5e7eb; color: #4b5563;"><a href="mailto:${email}" style="color: #4f46e5; text-decoration: none;">${email}</a></td>
        </tr>
        <tr style="background-color: #f9fafb;">
          <td style="padding: 10px; border: 1px solid #e5e7eb; font-weight: bold; color: #374151;">Phone Number:</td>
          <td style="padding: 10px; border: 1px solid #e5e7eb; color: #4b5563;"><a href="tel:${phone}" style="color: #4f46e5; text-decoration: none;">${phone}</a></td>
        </tr>
        <tr>
          <td style="padding: 10px; border: 1px solid #e5e7eb; font-weight: bold; color: #374151;">Business Type:</td>
          <td style="padding: 10px; border: 1px solid #e5e7eb; color: #4b5563;">${businessType}</td>
        </tr>
        <tr style="background-color: #f9fafb;">
          <td style="padding: 10px; border: 1px solid #e5e7eb; font-weight: bold; color: #374151; vertical-align: top;">Bottleneck:</td>
          <td style="padding: 10px; border: 1px solid #e5e7eb; color: #4b5563; white-space: pre-wrap;">${message}</td>
        </tr>
      </table>
      
      <div style="margin-top: 30px; padding: 15px; background-color: #eef2ff; border-radius: 6px; border-left: 4px solid #4f46e5;">
        <p style="margin: 0; font-size: 14px; color: #4338ca; font-weight: 500;">
          💡 **Tip:** Follow up within 15 minutes to increase conversion rates by up to 391%!
        </p>
      </div>
      
      <p style="font-size: 12px; color: #9ca3af; text-align: center; margin-top: 30px; border-top: 1px solid #f3f4f6; padding-top: 15px;">
        Sent automatically by your AI Agency Lead Intake System.
      </p>
    </div>
  `;

  if (isSMTPConfigured) {
    try {
      const transporter = nodemailer.createTransport({
        host,
        port,
        auth: {
          user,
          pass,
        },
      });

      await transporter.sendMail({
        from: `"AI Agency Leads" <${user}>`,
        to: adminEmail,
        subject: `🔥 New Lead Alert: ${name} (${businessType})`,
        text: `New Lead Inquiry:\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nBusiness Type: ${businessType}\nBottleneck: ${message}`,
        html: emailBodyHTML,
      });

      console.log(`[SMTP] Notification email sent successfully to ${adminEmail}`);
      return { success: true, method: "smtp" };
    } catch (error) {
      console.error("[SMTP Error] Failed to send email via SMTP:", error);
      // Don't crash the request, fall back to console log log
    }
  }

  // Fallback / Log to console in development
  console.log("==============================================================================");
  console.log("🚨 SIMULATED ADMIN EMAIL ALERT (SMTP credentials not configured or default) 🚨");
  console.log(`To: ${adminEmail}`);
  console.log(`Subject: 🔥 New Lead Alert: ${name} (${businessType})`);
  console.log(`Name: ${name}`);
  console.log(`Email: ${email}`);
  console.log(`Phone: ${phone}`);
  console.log(`Business Type: ${businessType}`);
  console.log(`Biggest Bottleneck: ${message}`);
  console.log("==============================================================================");

  return { success: true, method: "console" };
}
