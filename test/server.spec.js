const {app, port} = require('../src/server')
const supertest = require('supertest')

describe('Does it work?', () => {
    let server

    beforeEach(() => {
        server = app.listen(port, () => {console.log('live')})
    })

    it('Should respond to /', (done) => {
        supertest(server).get('/').expect(200, done);
    })

    afterEach((done) => {
        server.close(done)
    })
})