const Joi = require("@hapi/joi");

const verifyLoginCredentials = reqBody => {
  const schema = Joi.object({
    username: Joi.string().required(),
    password: Joi.string().required()
  });

  return schema.validate(reqBody);
};

module.exports.verifyLoginCredentials = verifyLoginCredentials;
