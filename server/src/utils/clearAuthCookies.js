export const clearAuthCookies = (res) => {
    const cookieOptions = {
        httpOnly: true,
        secure: true,
        sameSite: 'none'
    }

    res.clearCookie("accessToken", cookieOptions);
    res.clearCookie("refreshToken", cookieOptions);
};