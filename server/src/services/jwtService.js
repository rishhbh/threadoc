import jwt from 'jsonwebtoken';

export const generateAccessToken = (user, res) => {
    const accessToken = jwt.sign(
        { userId: user._id, email: user.email },
        process.env.JWT_ACCESS_SECRET,
        { expiresIn: "15m" }
    );

    res.cookie("accessToken", accessToken, {
        maxAge: 15 * 60 * 1000,
        httpOnly: true,
        secure: true,
        sameSite: "none"
    });

    return accessToken;
};

export const generateRefreshToken = (user, res) => {
    const refreshToken = jwt.sign(
        { userId: user._id, email: user.email },
        process.env.JWT_REFRESH_SECRET,
        { expiresIn: "15d" }
    );

    res.cookie("refreshToken", refreshToken, {
        maxAge: 15*24*3600*1000,
        httpOnly: true,
        secure: true,
        sameSite: "none"
    });

    return refreshToken;
}