var express = require('express')
var router = require('./router/index.js')
var app = express()

app.use('/', router)
app.listen(5219)