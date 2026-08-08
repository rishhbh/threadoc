const authenticateJWT = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) return res.sendStatus(401);

    jwt.verify(token, process.env.JWT_ACCESS_SECRET, (err, payload) => {
        if (err) return res.sendStatus(403);
        req.user = payload;
        next();
    });
};