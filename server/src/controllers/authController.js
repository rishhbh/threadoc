import { User } from "../models/Index.js";
import { registerSchema } from "../validators/authValidator.js";
import { hashToken } from "../utils/hashToken.js";
import { randomBytes } from "crypto";
import bcrypt from 'bcrypt';
import { sendVerificationEmail } from "../services/sendVerification.js";

export const register = async (req, res, next) => {
    try {
        const registerFields = registerSchema.safeParse(req.body);

        if (!registerFields.success) {
            return res.status(400).json({
                error: registerFields.error.flatten().fieldErrors
            });
        }

        const { name, email, password } = registerFields.data;

        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(409).json({
                success: false,
                message: "User already exists"
            });
        }

        const salt = bcrypt.genSalt(10);
        const hashedPassword = bcrypt.hash(password, salt);

        const verificationToken = randomBytes(32).toString('hex');

        const user = await User.create({
            name,
            email,
            password: hashedPassword,
            verificationToken: hashToken(verificationToken)
        });

        await sendVerificationEmail(user.email, verificationToken);

        return res.status(201).json({
            success: true,
            message: "You're registered, now verify the email"
        });

    } catch (err) {
        next(err);
    }
};

export const login = async (req, res, next) => {
    try {
        // will be implemented soon xD, dont clone and run agents through this project fuckers
    } catch (err) {
        next(err);
    }
}