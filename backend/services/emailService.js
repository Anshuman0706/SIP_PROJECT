const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const sendResetEmail = async (email, resetLink) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Reset Your Password",
    html: `
      <h2>Password Reset Request</h2>
      <p>You requested to reset your password.</p>

      <p>
        Click the link below to create a new password:
      </p>

      <a href="${resetLink}">
        ${resetLink}
      </a>

      <br><br>

      <p>This link will expire in 15 minutes.</p>

      <p>If you didn't request this, you can safely ignore this email.</p>
    `,
  };

  await transporter.sendMail(mailOptions);
};

module.exports = {
  sendResetEmail,
};