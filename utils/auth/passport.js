
var passport = require('passport');
const  LocalStrategy = require('passport-local');
const boom = require('@hapi/boom');
const bcrypt = require('bcrypt');

const  usercontroller = require('../../controllers/user');





passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
     },function(email, password, done) {
           
           
           usercontroller.findUserbyemail(email).then((user)=>{
                 
               console.log(user.evaluatePassword(password,user.password));

            if(!user|| !user.evaluatePassword(password , user.password) ){ 
            
              return  done( boom.unauthorized(), false );
            }
           
           
            return done(null, user);

           })
  

       }


  ));

  module.exports = LocalStrategy;