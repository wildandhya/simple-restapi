const user = require('../model/user-model')

class UserRepository{
    static find(){
        return user.find().exec()
    }

    static findByEmail(emailAddress){
        return user.exists({emailAddress})
    }

    static findByAccountNumber(accountNumber){
        return user.findOne().where({accountNumber}).exec()
    }

    static findByIdentityNumber(identityNumber){
        return user.findOne().where({identityNumber}).exec()
    }

    static create(userName,emailAddress, accountNumber,identityNumber){
        return user.create({userName,accountNumber,identityNumber, emailAddress})
    }

    static update(id, param){
        return user.findOneAndUpdate({_id:id}, param).exec()
    }

    static delete(id){
        return user.findByIdAndDelete(id).exec()
    }
}

module.exports = UserRepository