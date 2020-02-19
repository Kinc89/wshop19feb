//Härifrån startar vi vår webshop
const {app, port } = require('./src/server')


app.listen(port, () => console.log(`Example all listening on ${port}!`))