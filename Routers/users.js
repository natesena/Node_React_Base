const 
    express = require('express')
    usersRouter = new express.Router()
    usersCtrl = require('../Controllers/users.js')

usersRouter.route('/')
    .get(usersCtrl.index)
    .post(usersCtrl.create)

    module.exports = usersRouter