
const mongoose = require('mongoose');


mongoose.connect('mongodb://127.0.0.1:27017/Tasks')
  .then(() => console.log('Servidor Mongo Conectado'));

  mongoose.connection.on('connected', function() {
   console.log('MongoDB event connected');
});


  mongoose.connection.on('disconnected', function() {
   console.log('MongoDB event disconnected');
});

mongoose.connection.on('reconnected', function() {
   console.log('MongoDB event reconnected');
});

mongoose.connection.on('error', function(err) {
   console.log('MongoDB event error: ' + err);
});

/*
 mongoose.connect('mongodb://localhost:27017');

 mongoose.connection.on('connected',function(){
   console.log('Mongoose connected');
   });

 */



