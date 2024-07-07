const jwt = require('jsonwebtoken')
require('dotenv').config()

module.exports = generadortoken = (body)=>{
    const payload = {body}
    return jwt.sign(payload,process.env.SECRET_TOKEN,{
        expiresIn: '4h'
    })
}