const chai = require('chai')
const expect = chai.expect
const chaiHttp = require('chai-http')
chai.use(chaiHttp)
const server = 'http://localhost:4000'

describe('Test the server', function() {

  it('should return 200 status for valid url', function() {
    return chai.request(server)
      .get('/valves')
      .then((res) => {
        expect(res).to.have.status(200)
      })
      .catch((err) => {
        throw err
      })
  })

  it('should return a body that contains HTML generated from the relevant index.md markdown file', function() {
    return chai.request(server)
      .get('/valves')
      .then((res) => {
        expect(res.text).to.include('<h1 id="valves">Valves</h1>')
      })
      .catch((err) => {
        throw err
      })
  })

  it('should return 404 status for invalid url', function() {
    return chai.request(server)
      .get('/invlid-url')
      .then((res) => {
        expect(res).to.have.status(404)
      })
      .catch((err) => {
        throw err
      })
  })

})
