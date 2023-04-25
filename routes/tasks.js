const express = require('express');
const controller = require('../controllers/tasks');
const router = express.Router();


/*post new task */

router.post('/new',(req,res)=>{
     

 controller.addNewTask( req.body.name, req.body.level, req.body.done )
 
  .then((obj)=>{
    
    console.log(obj);
    res.json(obj);   

 })   

  .catch((e)=>{console.log(e)});


});






/* get all tasks*/

router.get('/all',(eq,res)=>{
   
controller.listTasks().then((tasks)=>{res.json(tasks)});
});


/* delete a task */
router.patch('/:id', (req,res)=>{

  res.send(req.params.id);


  
});





module.exports = router;