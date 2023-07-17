let chai = require('chai');
let chaiHttp = require('chai-http');
let app = require('../index');


// Assertion 
chai.should();
chai.use(chaiHttp);


 describe('Test index',()=>{
    it('It should return 200 status',(done)=>{
         chai.request(app)
         .get('/')
         .end((err, response)=>{
            response.should.have.status(200);
            done(); 
         })
    })
 })