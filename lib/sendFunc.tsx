"use server";

import { dreamcatcherEmailTemplate } from "./dreamcatcherEmailTemplate";
import { sendmail } from "./sendMail";

export const sendFunc = async (
  name: string,
  email: string,
  phone: string,
  subject: string,
  message: string
): Promise<boolean> => {
  try {
    const emailBody = dreamcatcherEmailTemplate({
      name,
      email,
      phone,
      subject,
      message,
    });

    await sendmail({
      to: ["saifalam.st@gmail.com"],
      name: name || "Website Visitor",
      subject: `New Inquiry: ${subject}`,
      body: emailBody,
    });

    return true;
  } catch (error) {
    console.error("Error sending contact form email:", error);
    return false;
  }
};
