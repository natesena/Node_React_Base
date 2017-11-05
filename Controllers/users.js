const User = require('../Models/Users.js')

module.exports={
    //find all users by giving no search params
    index: (req,res)=>{
        User.find({}, (err,users)=>{
            res.json(users)
        })
    },
    create: (req,res)=>{
        User.create(req.body, (err,user)=>{
            if(err) return res.json({success: false, code: err.code})
            res.json({success: true, message:'user created', user})
        })
    }
}