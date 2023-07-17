let chai = require('chai');
let chaiHttp = require('chai-http');
let app = require('../index');


// Assertion 
chai.should();
chai.use(chaiHttp);

   describe('Task ApI ',()=>{
      it('It should return all tasks', (done)=>{
         chai.request(app)
         .get('/tasks/all')
         .end((err, response)=>{
            response.should.have.status(200); 
            response.body.should.be.a('array');
            response.body.length.should.not.be.eq(0);
        
            done();
         })

      })


  });