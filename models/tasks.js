
const mongoose = require('mongoose');

const  taskSchema = new mongoose.Schema({
   
    name: String,
    priority: String,
    done: {type:Boolean, default:false }

    
});

const task = mongoose.model('Task', taskSchema);


module.exports = task;
