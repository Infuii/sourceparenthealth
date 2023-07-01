import nodemailer from "nodemailer";
import smtpTransport from "nodemailer-smtp-transport";

export default async function handler(req: { method: string; body: { name: any; email: any; message: any; }; }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { message: string; }): void; new(): any; }; }; }) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;

    // Create a transporter object for sending emails
    const transporter = nodemailer.createTransport(
      smtpTransport({
        service: "Gmail", // Replace with your email provider (e.g., "Gmail", "Outlook")
        auth: {
          user: "sourceparenthealthlife@gmail.com", // Replace with your email address
          pass: "nnguyzolaswitiid", // Replace with your email password or app password
        },
      })
    );
      const mailList = [
        "sourceparenthealthlife@gmail.com",
        email,
      ]
    try {
      // Send the email
      await transporter.sendMail({
        from: email,
        to: mailList,
        subject: "Your email to Source Parent Health Life Support has been received!",
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      });

      // Email sent successfully
      res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ message: "Error sending email" });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}