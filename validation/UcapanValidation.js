import Joi from 'joi';

const Schema = Joi.object({
    displayName: Joi.string()
        .min(3)
        .max(15)
        .required(),

    domisili: Joi.string()
        .min(5)
        .max(15)
        .required(),

    message: Joi.string()
        .min(3)
        .max(200)
        .required()
});

const UcapanValidation = (displayName, domisili, message) => {
    const Validation = Schema.validate({
        displayName: displayName,
        domisili: domisili,
        message: message
    });

    return Validation
}

export default UcapanValidation;