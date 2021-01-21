function getError(error, req, res, next) {
    console.error(error.message)
    if (!error.statusCode) error.statusCode = 500;
    res.status(error.statusCode).send(error.message);
}

module.exports = getError;