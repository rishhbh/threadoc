import { z } from 'zod';

export const registerSchema = z.object({
    name: z
        .string()
        .trim()
        .min(3)
        .max(45),

    email: z
        .string()
        .trim()
        .email()
        .toLowerCase()
        .max(254),

    password: z
        .string()
        .min(8)
        .max(64)
});

export const updateSchema = z.object({
    name: z
        .string()
        .trim()
        .min(3)
        .max(45),

    email: z
        .string()
        .trim()
        .email()
        .toLowerCase()
        .max(254),
});


export const loginSchema = z.object({
    email: z
        .string()
        .trim()
        .toLowerCase()
        .email()
        .max(254),

    password: z
        .string()
        .min(8)
        .max(64)
});