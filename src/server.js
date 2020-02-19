//Här ska vi definiera vår server
const express = require('express')
const app = express()
const port = 8080
const mongoose = require('mongoose')

//route till servern
app.get('/', (req, res) => {
    const enGrej = "Tjohej"
    res.status(200).render('gallery', {enGrej})
})
//css
app.use('/public', express.static('public'));

// kicka igång servrern
module.exports = { app, port }