const express = require('express');
const controller = require('../controllers/tasks');
const router = express.Router();


/*post new task */

router.post('/new',(req,res)=>{
     

 controller.addNewTask( req.body.name, req.body.level, req.body.done )
 
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
    }).catch((e)=>{console.log(e)});

});





module.exports = router;