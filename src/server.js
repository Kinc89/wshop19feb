//Här ska vi definiera vår server
const express = require('express')
const app = express()
const port = 8080

//route till servern
app.get('/', (req, res) => res.send('Hello world'))

// kicka igång servrern
module.exports = { app, port }