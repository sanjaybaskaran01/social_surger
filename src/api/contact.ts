import nodemailer from 'nodemailer';
import type { NextApiRequest, NextApiResponse } from 'next';

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true, // use SSL
  auth: {
    user: 'socialsurger@gmail.com',
    pass: 'Tunuktunukmoney123'
  }
});


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).end();
  }

  const { name, email, company, subject, message } = req.body;

  const mailOptions = {
    from: email,
    to: 'contact@socialsurger.com',
    subject: `${subject} - from ${name}`,
    text: `Company: ${company}\nMessage: ${message}`,
  };

  transporter.sendMail(mailOptions, (error: Error | null, info: nodemailer.SentMessageInfo) => {
    if (error) {
      console.log(error);
      res.status(500).send(error);
    } else {
      res.status(200).json({ message: 'Email sent successfully.' });
    }
  });
}
