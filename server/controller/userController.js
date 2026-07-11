const User = require('../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

exports.Register = async(req, res)=> {
    try {
        const {email, password} = req.body
     if(!email || !password) {
        return res.status(404).json({message: "All fields are requierd!"})
     }

     const existUser = await User.findOne({email})
       if(existUser) {
        return res.status(400).json({message: "User Already Exists!"})
       }

     const hashPass = await bcrypt.hash(password, 10)

     const data = await User.create({email, password: hashPass})

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

        const existUser = await User.findOne({email})
          if(!existUser) {
            return res.status(404).json({message: "User does not Exists!"})
          }

        const matchPass = await bcrypt.compare(password, existUser.password)
            if(!matchPass) {
                return res.status(404).json({message: "Incorrect Password!"})
            }

//jwt
        const token = jwt.sign(
          {
          id: existUser._id,
          email: existUser.email
        },
        process.env.JWT_SECRET,
        {
          expiresIn: "7d"
        }
      )

        res.status(200).json({message: "Logged In.", token, email: existUser.email})

    } catch (error) {
        res.status(500).json({message: "Login Error!!", error: error.message})
    }
}