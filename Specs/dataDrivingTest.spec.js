// Test: dataDrivingTest.spec.js
const request = require('supertest'); // import supertest
require('chai');
// import chai
const expect = require('chai').expect; // import expect

const config = require('../Config/testConfig'); // import test config
const requestData = require('../TestData/requestData'); // import request data
const responseData = require('../TestData/responseData'); // import response data

// Test Suite
describe('Data Driving-Verify that the Get and POST API returns correctly', function(){
        // Test case 1
        it('Data Driving-Verify that the GET API returns correctly', function(done){
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
        it('Data Driving-Verify that the POST API returns correctly', function(done){
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