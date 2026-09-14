import { authRateLimiter } from "../utils/ratelimiters.js";

export const authRateLimit = async (req, res, next) => {
    try {
        const identifier = req.user?.userId || req.ip || "anonymous";

        const { success, reset } = await authRateLimiter.limit(identifier);

        if (!success) {
            const retryAfter = Math.ceil((reset - Date.now()) / 1000);
            res.setHeader("Retry-After", retryAfter);
            return res.status(429).json({
                success: false,
                message: "Too many requests, please try again later"
            });
        }

        next();
    } catch (err) {
        next(err);
    }
};