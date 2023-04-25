const Task = require('../models/tasks');

    /* List all Tasks*/

    function taskLists(){
      return  Task.find(); 
      }
 
     

     function addTask(tarea,cb){
    
      const myTask = new Task(tarea);
       
       myTask.save();

       cb(myTask);      
        
     }


     function deleteTask(id){
       
         return Task.deleteOne({ _id: id  }).then((task)=>{console.log('Task deleted ')});

     } 
  
  



module.exports = {
 add : addTask,
 list: taskLists,
 delete: deleteTask
}