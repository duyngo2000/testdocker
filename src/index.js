const express = require('express')

const key = require('./config/main')
const ConnectDB = require('./config/db')

const {port, mongoURL} = key
ConnectDB(mongoURL)
const app = express()
app.listen(port, ()=> console.log(`server runing port ${port}`))