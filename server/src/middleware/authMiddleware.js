import jwt from 'jsonwebtoken';

export const authMiddleware = (req, res, next) => {
    try {
        const { accessToken } = req.cookies;
        if (!accessToken) {
            return res.status(403).json({
                success: false,
                message: "Unauthorized"
            });
        }

        const payload = jwt.verify(accessToken, process.env.JWT_ACCESS_SECRET);

        if (!payload) {
            return res.status(403).json({
                success: false,
                message: "Unauthorized"
            });
        }

        req.user = payload;
        next();
    } catch (err) {
        next(err);
    }
}