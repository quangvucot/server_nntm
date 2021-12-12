const Joi = require("@hapi/joi");

const registerValidate = (data) => {
  const schema = Joi.object({
    userName: Joi.string().min(6).required(),
    password: Joi.string().min(6).required(),
    phoneNumber: Joi.string().min(10).required(),
  });
  return schema.validate(data);
};
