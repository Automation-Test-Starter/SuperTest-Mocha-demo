// Test: multiEnvTest.spec.js
const request = require('supertest'); // import supertest
require('chai');
// import chai
const expect = require('chai').expect; // import expect

const config = process.env.NODE_ENV === 'test' ? require('../Config/testConfig-test') : require('../Config/testConfig-dev'); // import test config
const requestData = process.env.NODE_ENV === 'test' ? require('../TestData/requestData-test') : require('../TestData/requestData-dev'); // import request data
const responseData= process.env.NODE_ENV === 'test' ? require('../TestData/responseData-test') : require('../TestData/responseData-dev'); // import response data

// Test Suite
describe('multiEnv-Verify that the Get and POST API returns correctly', function(){
    // Test case 1
    it('multiEnv-Verify that the GET API returns correctly', function(done){
        request(config.host) // Test endpoint
            .get(config.getAPI) // API endpoint
            .expect(200) // expected response status code
            .expect(function (res) {
                expect(res.body.id).to.equal(responseData.getAPI.id)
                expect(res.body.userId).to.equal(responseData.getAPI.userId)
                expect(res.body.title).to.equal(responseData.getAPI.title)
                expect(res.body.body).to.equal(responseData.getAPI.body)
            }) // expected response body
            .end(done) // end the test case

    });
    // Test case 2
    it('multiEnv-Verify that the POST API returns correctly', function(done){
        request(config.host) // Test endpoint
            .post(config.postAPI) // API endpoint
            .send(requestData.postAPI) // request body
            .expect(201) // expected response status code
            .expect(function (res) {
                expect(res.body.id).to.equal(responseData.postAPI.id )
                expect(res.body.userId).to.equal(responseData.postAPI.userId )
                expect(res.body.title).to.equal(responseData.postAPI.title )
                expect(res.body.body).to.equal(responseData.postAPI.body )
            }) // expected response body
            .end(done) // end the test case
    });
});