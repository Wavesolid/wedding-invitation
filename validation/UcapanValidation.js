import Joi from 'joi';

const Schema = Joi.object({
    domisili: Joi.string()
        .min(5)
        .max(15)
        .required(),

    message: Joi.string()
        .min(3)
        .max(200)
        .required()
});

const UcapanValidation = (domisili, message) => {
    const Validation = Schema.validate({
        domisili: domisili,
        message: message
    });

    return Validation
}

export default UcapanValidation;