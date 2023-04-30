

$(function(){
      


   let no = 1;
  
     /*Checked */
    // $get("isAgeSelected ").checked == true

  
   ////////////////////////// /*Get All Tasks*/////////////////

    $.getJSON('/tasks/all',(data)=>{     
    
      $.each(data,(i , value)=>{
        console.log(value.name);
        console.log(i);

        let newRow = `<tr><td>${no}</td><td>${value.name}</td><td>${value.level}</td> <td> <input class="form-check-input" type="checkbox" value="true" id=""></td><td>
        <button type="button" id= "` + value._id + ` " class="btn btn-danger">Delete </button></td></tr>`;      
         no++;
        $('#datatable').append(newRow); 


        
          });

      })

      /*  DELETE TASK  */

            

                  $("#datatable").on('click','button', function(e){                  
                     
                    $(this).closest('tr').remove();
                     
                    let  id = e.target.id;            
                    alert(id);
                    
                    $.ajax({
                      url: '/tasks/delete/' + id,
                      type:'DELETE',
                      success:function(){
                         console.log('borrado con exito');
                       }
                    })
                                 
                   
                   
                   
                 });
        
            


    /* Create new Task *////////////////////////////////////
          
       
  
     
     $("#mainform").on('submit',(event)=>{
         
         event.preventDefault();
        
         let name = $("#name").val();
         let level =  $("#level").val();
          
         console.log(level);
         console.log(name);   



            
              $.post('/tasks/new', {name:name, level:level},function(data){
                    
                console.log( data ); 
                       
                     let newRow = `<tr><td>${no}</td><td>${data.name}</td><td>${data.level}</td> <td>  <input class="form-check-input" type="checkbox" value="true" id="">  </td><td>
                     <button type="button" id="` + data._id + ` "class="btn btn-danger">Delete</button></td></tr>`;  
                   
                     $('#datatable').append(newRow); 

                  
              })  
              
          

           })
  
        

        
         
    });
  





     