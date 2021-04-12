module.exports.ValidationError = (err, res) => {
    res.status(400).json({
        data: {
            message: "Bad Request, Validation failed",
        },
    });
}

module.exports.GenericServerError = (err, res) => {
    res.status(500).json({
        data: {
            message: err || "Generic Server Error",
        },
    });
}