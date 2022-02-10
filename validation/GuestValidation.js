import Joi from 'joi';

const Schema = Joi.object({
    Email: Joi.string()
        .allow(null)
        .allow('')
        .email({minDomainSegments: 2, tlds:{
            allow:['com', 'net']
        }}),
    WaNumber:  Joi.string()
        .min(10)
        .max(13)
        .pattern(/^[0-9]+$/)
        .allow(null)
        .allow('')
        .messages({
            'string.pattern.base': 'invalid number format ex.(0812xxxxxxx)'
        })
});

const GuestValidation = (email, waNumber) => {
    const Validation = Schema.validate({
        Email: email,
        WaNumber: waNumber
    });

    return Validation;
};

export default GuestValidation;