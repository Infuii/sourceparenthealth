import nodemailer from "nodemailer";
import smtpTransport from "nodemailer-smtp-transport";

export default async function handler(
  req: {
    method: string;
    body: {
      name: unknown;
      email: never;
      message: unknown;
      subject: unknown;  // Add this line
    };
  },
  res: {
    status: (arg0: number) => {
      (): unknown;
      new(): unknown;
      json: { (arg0: { message: string; }): void; new(): unknown; };
    };
  }
) {
  if (req.method === "POST") {
    const { name, email, message, subject } = req.body;  // Add subject here

    // Create a transporter object for sending emails
    const transporter = nodemailer?.createTransport(
      smtpTransport({
        service: "Gmail", 
        auth: {
          user: "sourceparenthealthlife@gmail.com", 
          pass: "nnguyzolaswitiid", 
        },
      })
    );

    const mailList = [
      "sourceparenthealthlife@gmail.com",
      email,
    ];

    try {
      // Send the email
      await transporter.sendMail({
        from: email,
        to: mailList,
        subject: `Received: ${subject as string}`,  // Use the provided subject as email's subject or integrate it as required
        text: `Name: ${name as string}\nEmail: ${email as string}\nSubject: ${subject as string}\nMessage: ${message as string}`,  // Add subject to the email content
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
