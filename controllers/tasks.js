
const storeTask = require('../store/tasks');

  /* List All Tasks */
 
 function listTasks(){
    
   return storeTask.list();

  }

  /* Add new Task */

  function addNewTask( name, level ){
    return new Promise((resolve,reject)=>{
      if(!name||!level ){
        
        reject('data missing' );

        } else  {
              taskObj = {name:name,level:level} 
           
              storeTask.add(taskObj,function(task){

                  if(!task){
                     
                     reject('cant create obj');
                     } else{
                      resolve(task)
                  }

              })
                   
          
          }

      })
    }  

  /* Delete Task */

    function deleteTask (id){
        


   }


 module.exports = {addNewTask, listTasks, deleteTask}