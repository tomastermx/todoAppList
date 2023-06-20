const mongoose = require('mongoose');

const bcrypt = require('bcrypt');



const userSchema = mongoose.Schema({

    createdOn: { type: Date, default: Date.now },
    email: String,
    password: String


});

    /* Methods */
  
   userSchema.methods.genereateHash =(password)=>{

    return bcrypt.hashSync(password,bcrypt.genSaltSync(10),null)  
    

   }

   userSchema.methods.evaluatePassword = (password , userpassword)=>{
   
   
      return bcrypt.compareSync(password, userpassword);
      

  }

const User = mongoose.model('User', userSchema);


module.exports = User;