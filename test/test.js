const { describe } = require("mocha");

describe("Testing Sign In", function() {

    beforeEach(function() {
        console.log('before')
    })

    // negative test case
    it("Failed Sign In", function(done) {
        done();
    })

    // positive test case
    it("Success Sign In", function(done) {
        done();
    })

    afterEach(function() {
        console.log('after')
    })

})

