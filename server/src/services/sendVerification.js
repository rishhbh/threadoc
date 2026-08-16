import { verificationEmail } from "../emails/verificationEmail.js";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_APP_PASSWORD,
    },
});

export const sendVerificationEmail = async (email, token) => {
    const verificationUrl = `${process.env.API_URL}/api/auth/user/verify/${token}`;

    await transporter.sendMail({
        from: `"Linearc Technologies" <${process.env.EMAIL_USER}>`,
        to: email,
        subject: "Verify your email",
        html: verificationEmail(verificationUrl),
    });
};