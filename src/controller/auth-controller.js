const authService = require("../service/auth-service");
const response = require("../helper/response");
const {generateToken} = require('../helper/jwt')

class authController {
  static login(req, res, next) {
    const {email} = req.body 
    authService.login(email).then((user)=>{
        if(!user) return response.error(res, 402, "Your Account not Found", [])
        const token = generateToken(email)
        console.log(token)
        return response.success(res, 200, "login success", token);
    }).catch(next)
    
  }

  static register(req, res, next) {
    const { username, email, accountNumber, identityNumber } = req.body;
    console.log(username, email, accountNumber, identityNumber)
    authService.register(username, email, accountNumber, identityNumber).then((data)=>{
    return response.success(res, 200, "Create User Success", []);
    }).catch(next)
  }
}

module.exports = authController;
