const response = require("../helper/response");
const UserService = require("../service/user-service");


class UserController {
  static getUser(req, res, next) {
    UserService.getUser().then((data)=>{
        return response.success(res, 200, "Success get data user", data)
    }).catch(next)
  }

  static getUserByAccountNumber(req, res, next) {
    const {accountNumber} = req.params
    UserService.getUserByAccountNumber(accountNumber).then((data)=>{
      return response.success(res, 200, "Success get data user", data)
    }).catch(next)
  }

  static getUserByIndentityNumber(req, res, next) {
    const {identityNumber} = req.params
    UserService.getUserByIndentityNumber(identityNumber).then((data)=>{
      return response.success(res, 200, "Success get data user", data)
    }).catch(next)
  }

  static createUser(req, res, next) {
    const {username, email, accountNumber, identityNumber} = req.body
    UserService.createUser(username, email, accountNumber, identityNumber).then((data)=>{
      return response.success(res, 200, "Success update user", data)
    }).catch(next)    
  }

  static updateUser(req, res, next) {
    const {id} = req.params
    UserService.updateUser(id, ...req.body).then((data)=>{
      return response.success(res, 200, "Success update user", data)
    }).catch(next)  
  }

  static async deleteUser(req, res, next) {
    const {id} = req.params
    UserService.deleteUser(id).then((data)=>{
      return response.success(res, 200, "Success delete user", data)
    }).catch(next)
  }
  
}

module.exports = UserController
