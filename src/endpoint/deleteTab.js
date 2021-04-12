const { requestValidationHandler } = require('../middleware/requestValidation');
const { GenericServerError } = require("../middleware/errorHandler");
const { deleteTab } = require('../service');
const joiObjectId = require('joi-oid');

const schema = {
    params: {
        tabId: joiObjectId.objectId(),
    }
};

async function handler(req, res) {
    const { tabId } = req.params;
    const response = await deleteTab(tabId);
    
    if (!response.error) {
        return res.status(204).json();
    } else {
        return GenericServerError(response.error, res);
    }
}

module.exports = [requestValidationHandler(schema), handler];
