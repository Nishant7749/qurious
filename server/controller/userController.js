const User = require('../models/User')
const bcrypt = require('bcrypt')

exports.Register = async(req, res)=> {
    try {
        const {email, password} = req.body
     if(!email || !password) {
        return res.status(404).json({message: "All fields are requierd!"})
     }

     const existUser = await User.findById({email})
       if(existUser) {
        return res.status(400).json({message: "User Already Exists!"})
       }

     const hashPass = await bcrypt.hash(password, 10)

     const data = await User.create({email, password})

     res.status(201).json({message: "User Registered.", user: data})

    } catch (error) {
        
        res.status(500).json({message: "Register Error!!", error: error.message})
    }
    
}


exports.Login = async(req,res)=> {
    try {
        const {email, password} = req.body
          if(!email || !password) {
            return res.status(404).json({message: "All fields are required!"})
          }

        const existUser = await User.findById({email})
          if(!existUser) {
            return res.status(404).json({message: "User does not Exists!"})
          }

        const matchPass = await bcrypt.compare(password, existUser.password)
            if(!matchPass) {
                return res.status(404).json({message: "Incorrect Password!"})
            }

        res.status(200).json({message: "Logged In."})

    } catch (error) {
        res.status(500).json({message: "Login Error!!", error: error.message})
    }
}