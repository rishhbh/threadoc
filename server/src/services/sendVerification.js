import { Resend } from "resend";
import { verificationEmail } from "../emails/verification.js";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendVerificationEmail = async (email, token) => {
    const verificationUrl = `${process.env.API_URL}/api/v1/auth/verify-email/${token}`;

    await resend.emails.send({
        from: process.env.EMAIL_FROM,
        to: email,
        subject: "Verify your email",
        html: verificationEmail(verificationUrl),
    });
};