const joi = require("joi");
const { requestValidationHandler } = require('../middleware/requestValidation');
const { GenericServerError } = require("../middleware/errorHandler");
const { add } = require('../service');

const { ecogAttributes, ecogScoreAttributesOptions } = require('../constants');

const dataPointsSchema = {
    dataType: joi.string().required(),
    label: joi.string().valid(...ecogAttributes).required(),
    description: joi.string().required(),
    options: joi.array().items(...ecogScoreAttributesOptions).required()
};

const schema = {
    body: {
        name: joi.string().required(),
        description: joi.string().allow(null),
        dataPoints: joi.array().items(dataPointsSchema).required(),  // Here we can Use Joi.alternatives().conditional('label', { is: 'selection', then: specific schema})
    },
};

async function handler(req, res) {
    
    const { name, description, dataPoints } = req.body;
    const response = await add({ name, description, dataPoints });

    if (!response.error) {
        return res.status(201).json({
            data: response.data
        });
    } else {
        return GenericServerError(response.error, res);
    }
}

module.exports = [requestValidationHandler(schema), handler];
