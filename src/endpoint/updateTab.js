const joi = require("joi");
const joiObjectId = require('joi-oid');
const { requestValidationHandler } = require('../middleware/requestValidation');
const { GenericServerError } = require("../middleware/errorHandler");
const { update } = require('../service');

const { ecogAttributes, ecogScoreAttributesOptions } = require('../constants');

const dataPointsSchema = {
    dataType: joi.string().required(),
    label: joi.string().valid(...ecogAttributes).required(),
    description: joi.string().required(),
    options: joi.array().items(...ecogScoreAttributesOptions).required()
};
const schema = {
    params: {
        tabId: joiObjectId.objectId(),
    },
    body: {
        name: joi.string().required(),
        description: joi.string().allow(null),
        dataPoints: joi.array().items(dataPointsSchema).required(),  // Here we can Use Joi.alternatives().conditional('label', { is: 'selection', then: specific schema})
    },
};

async function handler(req, res) {
    const { tabId } = req.params;
    const { name, description, dataPoints } = req.body;
    const response = await update(tabId, { name, description, dataPoints });
    
    if (!response.error) {
        return res.status(204).json();
    } else {
        return GenericServerError(response.error, res);
    }
}

module.exports = [requestValidationHandler(schema), handler];
