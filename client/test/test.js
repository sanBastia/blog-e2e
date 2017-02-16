const Nightmare = require('nightmare')
const expect = require('chai').expect

describe('Testing Irsan Sebastian blog e2e', function () {
  it('should login', function (done) {
    this.timeout(15000)
    var nightmare = Nightmare({ show: true })
    nightmare
      .goto('http://localhost:8080/')
      .wait(1000)
      .type('#email', 'sanbastia')
      .type('#password', 'gueganteng')
      .click('button[type=submit]')
      .wait(1000)
      .evaluate(function () {})
      .end()
      .then(function (result) {})
  })
})
