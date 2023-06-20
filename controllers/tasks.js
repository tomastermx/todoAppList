
const storeTask = require('../store/tasks');

  /* List All Tasks */
 
 function listTasks(){
    
   return storeTask.list();

  }

  /* Add new Task */

  function addNewTask( name, priority ){
    return new Promise((resolve,reject)=>{
      if(!name||!priority ){
        
        reject('data missing' );

        } else  {
              taskObj = {name:name,priority:priority} 
           
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
         
          return new Promise((resolve,reject)=>{
     
 
              
                  storeTask.delete(id, function(dltObj){
                    
                        if(dltObj){

                         console.log(dltObj);
                         resolve(dltObj)
                        } else if (err) {

                          reject('couldnt find object');
              
                        }
                    

                    
                  });
                

         })
           
     
      }


 module.exports = {addNewTask, listTasks, deleteTask}