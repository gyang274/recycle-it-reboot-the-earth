// index.js
// author: yg <gyang274@github.com>

// config process.env.<variable>
import './config'

// import express from 'express'
const express = require('express')
const bodyParser = require('body-parser')
import users from './src/components/users'

const app = express()
const port = process.env.PORT || 3000

app.use(bodyParser.json())

// client built
app.use(express.static('./dist'))

// server api endpoints
app.get('/api', (req, res) => {
  res.send('Hello, API ENDPOINT!')
})

app.use('/api/v1/users', users.router)

app.listen(
  port, () => {
    console.log(`server listen at ${port}!`)
  }
)