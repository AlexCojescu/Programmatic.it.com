"use server";

import { z } from "zod";
import { formSchema } from "./schemas";
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export const send = async (emailFormData: z.infer<typeof formSchema>) => {
   try {
    if (!process.env.YOUR_EMAIL) {
      throw new Error("YOUR_EMAIL environment variable is not set");
    }

    // Send notification to yourself about the new contact form submission
    const { error } = await resend.emails.send({
        from: `Contact Form <${process.env.RESEND_FROM_EMAIL}>`,
        to: [process.env.YOUR_EMAIL], // Now guaranteed to be a string
        subject: `New Contact Form Submission from ${emailFormData.firstName} ${emailFormData.lastName}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${emailFormData.firstName} ${emailFormData.lastName}</p>
          <p><strong>Email:</strong> ${emailFormData.email}</p>
          <p><strong>Message:</strong></p>
          <p>${emailFormData.message}</p>
        `
      });
      
      if (error) {
        throw error;
      }
   } catch (e) {
    throw e;
   }
};