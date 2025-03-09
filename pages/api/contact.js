import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { name, email, subject, message } = req.body;

  // Validate fields
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ message: "All fields are required." });
  }

  try {
    // Create transporter
    const transporter = nodemailer.createTransport({
      service: "gmail", // Use Gmail (or another SMTP service)
      auth: {
        user: "johnandrewborabo44@gmail.com", // Replace with your Gmail
        pass: "rljl kron tiar wepg", // Use an App Password instead of your main password
      },
    });

    // Email content
    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: "johnandrewborabo44@gmail.com", // Your email
      subject: `New Contact Form Submission: ${subject}`,
      text: message,
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Subject:</strong> ${subject}</p>
             <p><strong>Message:</strong> ${message}</p>`,
    });

    return res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong!", error: error.message });
  }
}
