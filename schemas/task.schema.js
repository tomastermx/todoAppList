const Joi = require('joi');

const name = Joi.string().min(3).max(15);
const priority = Joi.string();


const createTask =  Joi.object({

    name: name.required(), 
    priority: priority.required()
});



module.exports = {createTask}