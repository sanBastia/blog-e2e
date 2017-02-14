const chai = require('chai')
const expect = require('chai').expect

const chaiHttp = require('chai-http')
chai.use(chaiHttp)

const app = 'http://localhost:3000/API'

describe('Testing User', function () {
  // it('result - user register', function (done) {
  //   chai.request(app)
  //     .post('/user')
  //     .send({
  //       author: 'irwin',
  //       username: 'irwinpratajaya',
  //       password: 'lagujorok'
  //     })
  //     .end(function (err, res) {
  //       expect(res.body.data).to.be.an('object')
  //       done()
  //     })
  // })

  it('result - user login', function (done) {
    chai.request(app)
      .post('/login')
      .send({
        username: 'sanbastia',
        password: 'guegantseng'
      })
      .end(function (err, res) {
        console.log(res)
        expect(res.body.token).to.be.a('string')
        done()
      })
  })
})
