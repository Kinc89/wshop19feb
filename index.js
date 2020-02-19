//Härifrån startar vi vår webshop
const mongoose = require('mongoose')
const config = require('./config/config')
const { app, port } = require('./src/server')

app.set('view engine', 'ejs')



const dbOptions = {useUnifiedTopology: true, useNewUrlParser: true}
mongoose.connect(config.databaseURL, dbOptions).then(() => {
    app.listen(port, () => console.log(`Example all listening on ${port}!`))
})
