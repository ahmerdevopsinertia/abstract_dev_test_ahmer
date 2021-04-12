const { GenericServerError } = require("../middleware/errorHandler");
const { getAll } = require('../service');

async function handler(req, res) {
    const response = await getAll();
    if (!response.error) {
        return res.status(200).json({
            data: response.data
        });
    } else {
        return GenericServerError(response.error, res);
    }
}

module.exports = [handler];
