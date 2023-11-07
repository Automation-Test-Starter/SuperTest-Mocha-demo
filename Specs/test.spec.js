// // Test: test.spec.js
// const request = require('supertest'); // import supertest
// require('chai');
// // import chai
// const expect = require('chai').expect; // import expect
//
// // Test Suite
// describe('Verify that the Get and POST API returns correctly', function(){
//         // Test case 1
//         it('Verify that the GET API returns correctly', function(done){
//             request('https://jsonplaceholder.typicode.com') // Test endpoint
//                 .get('/posts/1') // API endpoint
//                 .expect(200) // expected response status code
//                 .expect(function (res) {
//                     expect(res.body.id).to.equal(1  )
//                     expect(res.body.userId).to.equal(1)
//                     expect(res.body.title).to.equal("sunt aut facere repellat provident occaecati excepturi optio reprehenderit")
//                     expect(res.body.body).to.equal("quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto")
//                 }) // expected response body
//                 .end(done) // end the test case
//
//         });
//         // Test case 2
//         it('Verify that the POST API returns correctly', function(done){
//             request('https://jsonplaceholder.typicode.com') // Test endpoint
//                 .post('/posts') // API endpoint
//                 .send({
//                     "title": "foo",
//                     "body": "bar",
//                     "userId": 1
//                 }) // request body
//                 .expect(201) // expected response status code
//                 .expect(function (res) {
//                     expect(res.body.id).to.equal(101  )
//                     expect(res.body.userId).to.equal(1)
//                     expect(res.body.title).to.equal("foo")
//                     expect(res.body.body).to.equal("bar")
//                 }) // expected response body
//                 .end(done) // end the test case
//         });
// });