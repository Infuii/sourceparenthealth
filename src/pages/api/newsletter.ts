import nodemailer from "nodemailer";
import smtpTransport from "nodemailer-smtp-transport";

export default async function handler(req: { method: string; body: { email: never; }; }, res: { status: (arg0: number) => { (): unknown; new(): unknown; json: { (arg0: { message: string; }): void; new(): unknown; }; }; }) {
  if (req.method === "POST") {
    const { email } = req.body;

    const transporter = nodemailer.createTransport(
      smtpTransport({
        service: "Gmail",
        auth: {
          user: "sourceparenthealthlife@gmail.com",
          pass: "nnguyzolaswitiid",
        },
      })
    );
    const mailList = ["sourceparenthealthlife@gmail.com", email];

    try {
      await transporter.sendMail({
        from: email,
        to: mailList,
        subject: "You have signed up for the Source Parent Health Life Newsletter!",
        text: `Email: ${email as string}\nWelcome to our newsletter!`,
      });

      res.status(200).json({ message: "Signed up for the newsletter successfully" });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ message: "Error signing up for the newsletter" });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
