const UserRepository = require("../repository/user-repository");

class UserService {
  static async getUser() {
    return UserRepository.find();
  }

  static getUserByAccountNumber(accountNumber) {
    return UserRepository.findByAccountNumber(accountNumber);
  }

  static getUserByIndentityNumber(identityNumber) {
   return UserRepository.findByIdentityNumber(identityNumber);
  }

  static createUser(username, email, accountNumber, identityNumber) {
    return UserRepository.create(
      username,
      email,
      accountNumber,
      identityNumber
    );
  }

  static updateUser(id, param) {
    return UserRepository.update(id, param);
  }

  static deleteUser(id) {
    return UserRepository.delete(id);
  }
}

module.exports = UserService;
