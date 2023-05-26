import nodemailer from 'nodemailer';
import type { NextApiRequest, NextApiResponse } from 'next';

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true, // use SSL
  auth: {
    user: 'socialsurger@gmail.com',
    pass: process.env.GMAIL_PASS
  }
});


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    res.status(405).json({ message: `Method ${req.method} is not allowed` });
    return;
  }

  const { name, email, company, subject, message } = req.body;

  const mailOptions = {
    from: "socialsurger@gmail.com",
    to: 'socialsurger@gmail.com',
    subject: `[ WEBSITE INQUIRY ] ${subject} - from ${name} : ${email}`,
    text: `Company: ${company}\nMessage: ${message}`,
  };

  const confirmationMailOptions = {
    to: email,
    from: "socialsurger@gmail.com",
    subject: `Confirmation: We received your message`,
    html: `
    <h3>Dear ${name},</h3>
    <p>Thank you for reaching out to us. We have received your message and will get back to you soon. Here are the details you submitted:</p>
    <ul>
      <li><b>Name:</b> ${name}</li>
      <li><b>Email:</b> ${email}</li>
      <li><b>Company Name:</b> ${company}</li>
      <li><b>Subject:</b> ${subject}</li>
      <li><b>Message:</b> ${message}</li>
    </ul>
    <p>If any of these details are incorrect, please let us know as soon as possible.</p>
    <p>Best regards,<br/>SocialSurger Team</p>
  `
  };

  try {
    await transporter.sendMail(mailOptions);
    await transporter.sendMail(confirmationMailOptions);
    res.status(200).json({ message: 'Emails sent successfully.' });
  } catch (error) {
    console.error(error);
    Promise.reject()
    res.status(500).json({ message: 'Error in sending emails.' });
  }
}
