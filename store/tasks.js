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

      function updateTask(id,cb){
        //  Task.findByIdAndUpdate() 

      } 


      function deleteTask(id,cb){
       
         Task.findByIdAndDelete(id).then(( deletedTask)=>{

          cb(deletedTask);
          


         }).catch((err)=>{cb(err)});  
                       

     } 
  
  



module.exports = {
 add : addTask,
 list: taskLists,
 delete: deleteTask
}