
const nodemailer = require('nodemailer');
require('dotenv').config();

const NODEMAILER_EMAIL_SERVICE = process.env.NODEMAILER_EMAIL_SERVICE;
const NODEMAILER_EMAIL_ADDRESS = process.env.NODEMAILER_EMAIL_ADDRESS;
const NODEMAILER_PASSWORD = process.env.NODEMAILER_PASSWORD;

function sendEmail(email, message) {
  const to = 'oliviasalvini3@gmail.com';
  const subject = 'A message from Fishable App!';
  const text = `From ${email}

  Message: ${message}

  Thank you for using Fishable App Email Service`;

  const transporter = nodemailer.createTransport({
    service: NODEMAILER_EMAIL_SERVICE,
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: NODEMAILER_EMAIL_ADDRESS,
      pass: NODEMAILER_PASSWORD,
    },
  });

  const mailOptions = {
    from: email,
    to: to,
    subject: subject,
    text: text,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
    } else {
      console.log('Email sent:', info.response);
    }
  });
}

module.exports = { sendEmail };
