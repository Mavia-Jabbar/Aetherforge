import { Resend } from "resend";

const resend = new Resend(process.env.VITE_RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  if (!process.env.VITE_RESEND_API_KEY || !process.env.VITE_CONTACT_EMAIL) {
    return res.status(500).json({ error: "Missing API key or contact email" });
  }

  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res
        .status(400)
        .json({ error: "Missing required fields: name, email, message" });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: "Invalid email format" });
    }

    const data = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: process.env.VITE_CONTACT_EMAIL,
      subject: `New Contact Form - ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    res.status(200).json({ success: true });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Failed to send email" });
  }
}
