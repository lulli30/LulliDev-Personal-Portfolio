import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const CONFIG = {
  service: process.env.EMAIL_SERVICE || "gmail",
  user: process.env.EMAIL_USER,
  pass: process.env.EMAIL_PASSWORD,
  recipient: process.env.EMAIL_RECIPIENT,
  subjectPrefix: "New Contact Form Submission:",
};

const validateInput = ({ name, email, subject, message }) => {
  if (!name?.trim()) return "Name is required";
  if (!email?.trim()) return "Email is required";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return "Invalid email format";
  if (!subject?.trim()) return "Subject is required";
  if (!message?.trim()) return "Message is required";
  return null;
};

const createTransporter = () =>
  nodemailer.createTransport({
    service: CONFIG.service,
    auth: { user: CONFIG.user, pass: CONFIG.pass },
  });

const createEmail = (data) => ({
  from: `"${data.name}" <${CONFIG.user}>`,
  replyTo: data.email,
  to: CONFIG.recipient,
  subject: `${CONFIG.subjectPrefix} ${data.subject}`,
  text: data.message,
  html: `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; max-width: 600px;">
      <h2 style="color: #2563eb;">New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> <a href="mailto:${data.email}">${data.email}</a></p>
      <p><strong>Subject:</strong> ${data.subject}</p>
      <p><strong>Message:</strong></p>
      <p style="white-space: pre-wrap;">${data.message}</p>
    </div>
  `,
});

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const data = {
    name: req.body.name?.trim(),
    email: req.body.email?.trim(),
    subject: req.body.subject?.trim(),
    message: req.body.message?.trim(),
  };

  const validationError = validateInput(data);
  if (validationError) return res.status(400).json({ error: validationError });

  try {
    const transporter = createTransporter();
    await transporter.verify();
    await transporter.sendMail(createEmail(data));
    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Email error:", error);
    return res.status(500).json({
      error: "Failed to send message",
      ...(process.env.NODE_ENV === "development" && { details: error.message }),
    });
  }
}
