const Joi = require("@hapi/joi");

const memberValidation = reqBody => {
  const schema = Joi.object({
    firstname: Joi.string()
      .max(20)
      .required(),
    lastname: Joi.string()
      .max(20)
      .required(),
    username: Joi.string()
      .min(6)
      .max(20)
      .required(),
    password: Joi.string()
      .min(6)
      .max(20)
      .required(),
    email: Joi.string().email(),
    user_type: Joi.number().required(),
    created_by: Joi.string(),
    joined_date: Joi.date()
  });

  return schema.validate(reqBody);
};

module.exports.memberValidation = memberValidation;
