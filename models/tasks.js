
const mongoose = require('mongoose');

var taskSchema = new mongoose.Schema({
   
    name: String,
    level: String,
    done: {type:Boolean, default:false }

    
});

const task = mongoose.model('Task', taskSchema);


module.exports = task;
