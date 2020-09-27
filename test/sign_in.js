const chai = require("chai");
const expect = require("chai").expect;
const chaiHttp = require("chai-http");

chai.use(chaiHttp)

const baseUrl = chai.request('https://reqres.in')

describe("Sucess sign in test", function() {

    it("Should return success", function(done) {
        baseUrl.post("/api/login")
        .set('Content-Type', 'Application/json')
        .send({
            email: 'eve.holt@reqres.in',
            password: 'cityslicka'
        })
        .end(function(error, response) {
            expect(response.status).to.equals(200)
            expect(response.body).to.have.property('token')
            done();
        })
    })

    it("Should got error message when send request missing password", function(done) {
        baseUrl.post("/api/login")
        .set('Content-Type', 'Application/json')
        .send({
            email: 'peter@klaven'
        })
        .end(function(error, response) {
            expect(response.status).to.equals(400)
            expect(response.body).to.have.property('error')
            done()
        })
    })

})  