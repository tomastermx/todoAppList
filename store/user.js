
const bcrypt = require('bcrypt');
const boom = require('@hapi/boom');
const User = require('../models/user');



class userService {
   
      constructor(){ }

      /* Create User*/
       async addUser(data){
        
           const hash = await  bcrypt.hash(data.password,10);
            const newUser  = await  User.create({
                 email: data.email,
                 password: hash });
                 
                 return newUser; 
           
       
        }
   
      



      /* find User  by Id*/

      async findUserbyId(id, cb){
      
            try{
               const user = await User.findById(id);
                  if(user){
                     cb(user);
                  } 
                    else { throw new Error()  }

             } catch(e){ cb(boom.notFound())}
    

        
          }



       /*Find User by email*/
     async  findByEmail(email , cb ){
            
            try{
           
                const user = await User.findOne({ email: email});  
                
              if(user){cb(user) }

              else{   throw boom.notFound(); }
          
          }       

            catch(e){ cb(e);  }
         
    }      
      

    
     
       

       



           /*Update*/
             
                          async Update(id, password , cb ){
                               try{
                               const user = await User.findById(id);
                               const hash = await  bcrypt.hash(password,10);
                               await user.updateOne({ password: hash });
                               cb(user);

                               } catch(e){ cb(boom.expectationFailed('expected this to work'))}
                         }

  
         /*Delete User*/
           async  delete(id ,cb){
               try{

              const deletedUser = await  User.deleteOne({ _id: id });
               cb(deletedUser);


               } 
               
               catch(e){ cb( boom.notFound('user not found'));  }  

         }

    
        }
       
         module.exports = userService;

