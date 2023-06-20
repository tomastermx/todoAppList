

const userService = require('../store/user');
const service = new userService();
const boom = require('@hapi/boom');


  /* User creation funciton */  
 
   function createUser(data){

      return new Promise((resolve,reject)=>{
               
         if(!data.email || !data.password  ){
            reject('data missing');

         } else {
            
             service.addUser(data, function(user){
               console.log(user);
               resolve(user);
             });
             
         }


      })

    }

          /*Update User */
        
          function updateUser(data){
                 
              if(!data.id || !data.password ){
                console.log('data missing');
               } else {  
              
               return new Promise((resolve,reject)=>{      
                       service.Update(data.id,data.password,(err,user)=>{
                          if(err){console.log(err)}
                          else {
                           console.log(user);
                          }

                      })      
                     
                 })


             } 
                   


            
            
          }



    
         /* Delete User */
       function deleteUser(data){
         return new Promise(( resolve,reject)=>{
          
            if(!data.id){
              
               reject('user id missing');
               console.log('user id is missing');
              } else { 
               service.delete(data.id,function(err,user){
                  
                 if(err){
                  console.log(err);
                 }
                  else {
                   console.log(user);
                   resolve(user);
                  }

               })
            
             }
                       
         })
            
       
      }         
      

     /*Find User */
     
          function findUserById (id){
               
             return new Promise((resolve , reject)=>{
               
                                 
               
                service.findUserbyId(id,(user)=>{
                   if(user instanceof Error){
                  
                    reject(user);
                    } else{
                      console.log(user);
                      resolve(user);
                    } 

                     })

                })
              
               
                }          
          



       /*Find user by email */  

      function findUserbyemail (email){
         return new Promise((resolve , reject)=>{

              if(!email){
               reject('data missing');
        
              } else {
                service.findByEmail(email, (user)=>{
                    
                    if(user instanceof Error){
                      reject(user);
                     } else { 
                      console.log(user);
                      resolve(user);
                      
                     }

                })
              }
         })
     }


     module.exports = {createUser,updateUser,findUserbyemail,findUserById,deleteUser}