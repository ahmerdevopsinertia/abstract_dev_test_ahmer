/* eslint-disable consistent-return */
const joi = require("joi");
const { ValidationError } = require("./errorHandler");

module.exports.requestValidationHandler = (schema) => async (req, res, next) => {

    if (schema.body) {
        const { error } = joi.object(schema.body).validate(req.body);
        console.log(error);
        if (error) {
            return ValidationError(error, res);
        }
    }

    if (schema.params) {
        const { error } = joi.object(schema.params).validate(req.params);
        if (error) {
            return ValidationError(error, res);
        }
    }
    await next();
};
