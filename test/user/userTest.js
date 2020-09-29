let chai = require('chai');
let chaiHttp = require('chai-http');
const expect = require('chai').expect;
const assert = require('chai').assert;

chai.use(chaiHttp);
const url = 'http://localhost:3000/api';

describe('user test', () => {
    describe('user-register', () => {
        it('should return user object, it must be a brand new user', (done) => {
            chai.request(`${url}/users`)
                .post('/register')
                .send({ email: 'test@test.test', username: "test", password: 'password123' })
                .end((err, res) => {
                    assert.typeOf(res.body, 'object');
                    expect(res).to.have.status(200);
                    done();
                });
        });
        it('should give an error 403', (done) => {
            chai.request(`${url}/users`)
                .post('/register')
                .send({ email: 'test@test.test', username: "test", password: 'password123' })
                .end((err, res) => {
                    assert.typeOf(res.body, 'object');
                    expect(res).to.have.status(403);
                    console.log(res.body);
                    done();
                });
        });
    });
    describe('user-login', () => {
        it('should return user token', (done) => {
            chai.request(`${url}/users`)
                .post('/login')
                .send({ email: "test@test3.test", password: "test123123" })
                .end((err, res) => {
                    console.log(res.body.TOKEN);
                    assert.typeOf(res.body.TOKEN, 'string');
                    expect(res).to.have.status(200);
                    done();
                });
        });
        it('should give an error', (done) => {
            chai.request(`${url}/users`)
                .post('/login')
                .send({ email: "test@test32.test", password: "1123test123123" })
                .end((err, res) => {
                    assert.typeOf(res.body.error, 'string');
                    assert.equal(res.body.error, 'username or password are incorrect');
                    expect(res).to.have.status(403);
                    done();
                });
        });
    });
});