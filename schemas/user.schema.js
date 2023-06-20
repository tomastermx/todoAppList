const Joi = require('joi');

const id = Joi.string().alphanum();
const email = Joi.string().email();
const password = Joi.string().min(8);


const createUserSchema = Joi.object({
  email: email.required(),
  password: password.required()

});



const getUserSchema = Joi.object({
  id: id.required()
});


getbyemailUserSchema = Joi.object({
    email : email.required()
})





  module.exports = { createUserSchema ,getbyemailUserSchema , getUserSchema  }