

const express = require('express');
const app =   express();
const bodyParser = require('body-parser')
const PORT =  3000 ;
const db = require('./models/db');

const tasksRouter = require('./routes/tasks');
const indexRouter = require('./routes/index');


app.use(express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({}));
app.use('/', indexRouter);
app.use('/tasks', tasksRouter);




app.listen(PORT || 8080 ,()=>{ console.log('Servidor conectado');})



