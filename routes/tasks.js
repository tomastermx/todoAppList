const express = require('express');
const controller = require('../controllers/tasks');
const router = express.Router();
const validatorHandler = require('../middleware/validator');
const { createTask } = require('../schemas/task.schema');


/*post new task */

router.post('/new', validatorHandler(createTask,'body') , (req,res,next)=>{
     

 controller.addNewTask( req.body.name, req.body.priority, req.body.done )
 
  .then((obj)=>{
    
    console.log(obj);
    res.status(201).json(obj);   

 })   

  .catch((e)=>{console.log(e)});


});






/* get all tasks*/

router.get('/all',(eq,res)=>{
   
controller.listTasks().then((tasks)=>{
  res.status(200).json(tasks)});
});


/* delete a task */
router.delete('/delete/:id', (req,res)=>{

    //console.log(req.params.id);
    let id = req.params.id;

    controller.deleteTask(id).then((Obj)=>{
      
       res.json(Obj);
    }).catch((e)=>{console.log(e + "ruta")});

});





module.exports = router;