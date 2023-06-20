
const boom = require('@hapi/boom');
const express = require('express');
const router = express.Router();
const usercontroller = require('../controllers/user');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const validatorHandler = require('../middleware/validator');
const {createUserSchema, getbyemailUserSchema, getUserSchema  } = require('../schemas/user.schema')

require('dotenv').config();

 /*Create new User */
   router.post('/new',validatorHandler(createUserSchema, 'body'),(req,res,)=>{
  
    const body = req.body;
    console.log(req.body);

      usercontroller.createUser(body).then((user)=>{res.json(user.mail)});


  })
            


 

      /*Find User by Id */
       router.get('/find/:id', validatorHandler(getbyemailUserSchema, 'params'  )  , (req, res,next)=>{ 
        
        

        const {id} = req.params;
        

            usercontroller.findUserById(id).then((user)=>{res.json(user)})
             .catch((e)=>{next(e)})
       
          });


        /* Find user by email */
          
           router.post('/findbyemail', validatorHandler(getbyemailUserSchema, 'body'),(req,res, next)=>{
            
        

             const { email } = req.body;
             
               
             usercontroller.findUserbyemail(email).then((user)=>{res.json(user.email)})
             .catch((err)=>{next(err)})
      
              
           });
 
         /*  Passport Local  Login */

          router.post('/login',  passport.authenticate('local', {session: false}),(req,res)=>{
               
              console.log(req.user);

              const user = req.user;
              const payload = {
                id: user.id,
                email: user.email
                
              }
              const token = jwt.sign(payload, process.env.JWT_secretkey);
               
               res.json(token);


              console.log(token);
          });



             /* Delete User */
          router.delete('/delete/:id',(req,res)=>{
          console.log(req.params);
          const data = req.params;
          usercontroller.deleteUser(data);

        })


           /*Update user */

          router.patch('/update/:id',(req,res)=>{

             console.log(req.params);
             console.log(req.body);

             data ={id:req.params.id, password:req.body.password}
              usercontroller.updateUser(data);              
          }) 

  

module.exports = router;