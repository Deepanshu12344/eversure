import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user:process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

export const sendMail = async (request, response) => {
  try {
    const { email, subject, message } = request.body;
    console.log(email, subject, message);

    if (!email || !subject || !message) {
      return response.status(400).json({ success: false, message: "All fields are required." });
    }

    const mailOptions = {
      from: "deepanshu123sharma4@gmail.com",
      to: email,
      subject,
      text: message,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Error sending mail:", error);
        return response.status(500).json({ success: false, message: "Failed to send email." });
      } else {
        console.log("Email sent:", info.response);
        return response.status(200).json({ success: true, message: "Email sent successfully!" });
      }
    });
  } catch (err) {
    console.error("Unexpected server error:", err);
    return response.status(500).json({ success: false, message: "Unexpected server error." });
  }
};
