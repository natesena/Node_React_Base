const
    express = require('express')
    app = express()
    logger = require('morgan')
    bodyParser = require('body-parser')
    mongoose = require('mongoose')
    MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/base',
    PORT = 3000
    userRoutes = require('./Routers/users.js')

mongoose.connect(MONGODB_URI, (err) => {
    console.log(err || `Connected to MongoDB.`)
})   

app.use(logger('dev'))
app.use(bodyParser.json())

app.use('/', userRoutes)

app.listen(PORT, (err)=>{
    console.log(err|| `Server running on ${PORT}`)
})