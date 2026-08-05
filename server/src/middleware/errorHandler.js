const errorHandler = (err, _req, res, next) => {
    if (process.env.NODE_ENV == "development") {
        return res.status(500).json({
            error: err.message,
            stack: err.stack
        });
    } else {
        return res.status(500).json({
            error: "Internal server error"
        });
    }
};

export default errorHandler;