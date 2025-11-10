"use server";

import React from "react";
import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/lib/utils";
import ContactFormEmail from "@/email/contact-form-email";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const senderName = formData.get("senderName");
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  // simple server-side validation
  if (!validateString(senderName, 100)) {
    return {
      error: "Invalid sender name",
    };
  }
  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid sender email",
    };
  }
  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message",
    };
  }

  let data;
  try {
    // Send email to yourself
    data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "kilianbalaguer1@icloud.com",
      subject: `Portfolio Contact from ${senderName}`,
      replyTo: senderEmail as string,
      react: React.createElement(ContactFormEmail, {
        message: message as string,
        senderEmail: senderEmail as string,
        senderName: senderName as string,
      }),
    });

    // Send auto-reply to sender
    await resend.emails.send({
      from: "Kilian Balaguer <onboarding@resend.dev>",
      to: senderEmail as string,
      subject: "Thanks for reaching out!",
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #000;">Hey ${senderName}!</h2>
          <p style="color: #333; line-height: 1.6;">
            Thanks for reaching out through my portfolio. I've received your message and will get back to you as soon as possible.
          </p>
          <p style="color: #333; line-height: 1.6;">
            Your message:
          </p>
          <div style="background: #f5f5f5; padding: 15px; border-left: 4px solid #000; margin: 20px 0;">
            <p style="color: #333; margin: 0;">${message}</p>
          </div>
          <p style="color: #333; line-height: 1.6;">
            Best,<br/>
            <strong>Kilian Balaguer</strong>
          </p>
        </div>
      `,
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }

  return {
    data,
  };
};
