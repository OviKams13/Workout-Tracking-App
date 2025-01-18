require('dotenv').config()

const express = require('express')

//express App
const app = express()

//middleware
app.use((req, res, next) => {
    console.log(req.path ,req.method)
    next()
  })

//routes
app.get('/', (req, res) => {
    res.json({ msg: 'Welcome to the app' })
  })

//Listning for request
app.listen(process.env.PORT, () => {
    console.log(`Listening on port`, process.env.PORT)
  })