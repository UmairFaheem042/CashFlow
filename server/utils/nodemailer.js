const nodemailer = require("nodemailer");

const customMessageFormat = ``;

exports.sendMail = async (user, email, code) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASSWORD,
      },
    });

    const info = await transporter.sendMail({
      from: "💵 CashFlow", // sender address
      to: email,
      subject: "Verify your Account",
      text: "Verify your Account",
      html: `<!DOCTYPE html>
            <html>
            <head>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    line-height: 1.6;
                    color: #333;
                }
                .email-container {
                    max-width: 600px;
                    margin: 0 auto;
                    padding: 20px;
                    border: 1px solid #ddd;
                    border-radius: 8px;
                    background-color: #f9f9f9;
                }
                .header {
                    text-align: center;
                    background-color: #4CAF50;
                    padding: 10px 20px;
                    color: white;
                    border-radius: 8px 8px 0 0;
                }
                .token {
                    color: #4CAF50;
                    font-size: 24px;
                    font-weight: bold;
                }
                .footer {
                    text-align: center;
                    margin-top: 20px;
                    font-size: 14px;
                    color: #777;
                }
            </style>
            </head>
            <body>
            <div class="email-container">
                <div class="header">
                <h1>Welcome to CashFlow!</h1>
                </div>
                <p>Dear ${user},</p>
                <p>Thank you for signing up for <strong>CashFlow</strong>. We’re thrilled to have you on board and can't wait to help you manage your finances efficiently.</p>
                <p>To verify your account, please use the following verification token:</p>
                <p class="token">${code}</p>
                <p>If you did not sign up for CashFlow, please ignore this email or contact our support team immediately.</p>
                <p>Need help? Contact us at <a href="mailto:support@cashflow.com">support@cashflow.com</a>.</p>
                <p>Best regards,</p>
                <p>The <strong>CashFlow</strong> Team</p>
                <div class="footer">
                <p>&copy; 2024 CashFlow. All rights reserved.</p>
                </div>
            </div>
            </body>
            </html>`,
    });
  } catch (error) {
    console.error("Error sending email:", error);
  }
};
