const jwt = require('jsonwebtoken')

const verifyToken = (req, res, next)=> {
    const auth = req.headers.authorization
        if(!auth) {
            return res.status(404).json({message: "No token! Login Required."})
        }
    
    const token = auth.split(" ")

    const decode = jwt.verify(token, process.env.JWT_SECRET)

    req.user = decode

    next()
}

module.exports = verifyToken