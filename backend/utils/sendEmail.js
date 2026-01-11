
const nodemailer = require("nodemailer");

const sendEmail = async (to, subject, text) => {
  if (!to) {
    console.error("❌ No recipient email provided");
    return;
  }

  try {
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,    
        pass: process.env.EMAIL_PASS,
                   
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    let info = await transporter.sendMail({
      from: `"Pundit App" <uditpandey61@gmail.com>`,// sender address
      to,       // use the 'to' parameter
      subject,  // use the 'subject' parameter
      text,     // use the 'text' parameter
    });

    console.log("📩 Email sent:", info.response);
  } catch (err) {
    console.error("❌ Email error:", err.message);
  }
};

module.exports = sendEmail;
