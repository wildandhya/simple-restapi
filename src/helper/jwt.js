const jwt = require('jsonwebtoken')
const secret = "SECRET"
module.exports = {
    generateToken(payload){
       return jwt.sign(payload, secret) 
    },
}