let chai = require('chai');
let chaiHttp = require('chai-http');
const expect = require('chai').expect;
const assert = require('chai').assert;

chai.use(chaiHttp);
const url = 'http://localhost:3000/api';

describe('product api test', function () {
    describe('product endpoint', function () {
        // you need to put a header named auth-token with the token from the login
        it('should return the total ammount to pay for the items', (done) => {
            chai.request(`${url}/products`)
                .post('/')
                .set('auth-token', 'here goes the token')
                .send({ items: ['PANTS', 'PANTS', 'HAT', 'PANTS', 'TSHIRT', 'PANTS', 'PANTS'] })
                .end((err, res) => {
                    expect(res).to.have.status(200);
                    done();
                });
        });
    });
});