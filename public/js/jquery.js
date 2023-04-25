

$(function(){


   let no = 1;
   


   ////////////////////////// /*Get All Tasks*/////////////////

    $.getJSON('/tasks/all',(data)=>{     
    
      $.each(data,(i , value)=>{
        console.log(value.name);
        console.log(i);

        let newRow = `<tr><td>${no}</td><td>${value.name}</td><td>${value.level}</td> <td>${value.done}</td></tr>`;      
         no++;
        $('#datatable').append(newRow); 


        
      });


      })
    
    /* Create new Task *////////////////////////////////////
          
       
    /* getting data from the form */
     
     $("#mainform").on('submit',(event)=>{
         
         event.preventDefault();
 
        
         let name = $("#name").val();
         let level =  $("#level").val();
          
         console.log(level);
         console.log(name);   

  //           let newRow = `<td>  </td><td>Esto es</td><td>${name}</td> <td>${level}</td>`;      
  //         $('#datatable tr:last').after(newRow); 

            
              $.post('/tasks/new', {name:name, level:level},function(data){
                    
                console.log( data ); 
                    let newRow = `<td>${no} </td><td>${data.name}</td><td>${data.level}</td> <td>${data.done}</td>`;      
                     $('#datatable tr:last').after(newRow); 

              })  
              
             

                 
            
            //  let newRow = `<td> </td><td>Esto es</td><td>${name}</td> <td>${level}</td>`;      
                  // $('#datatable tr:last').after(newRow); 

          
             

       })
             
         
    });
  





       //  let newRow = `<td>  </td><td>Esto es</td><td>${name}</td> <td>${level}</td>`;      
       //  $('#datatable tr:last').after(newRow); 
         /*Adding data to HTML*/
