const UserRepository = require("../repository/user-repository");
class authService {
  static register(username, email, accountNumber, identityNumber) {
    return UserRepository.create(
      username,
      email,
      accountNumber,
      identityNumber
    );
  }

  static login(email) {
    return UserRepository.findByEmail(email)  
  }
}

module.exports = authService;
