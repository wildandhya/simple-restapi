const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    userName:{
        type:String,
        required:[true, "username required!"]
    },
    accountNumber:{
        type:Number,
        required:[true, "account number required!"]
    },
    emailAddress:{
        type:String,
        required:[true, "email required!"]
    },
    identityNumber:{
        type:Number,
        required:[true, "identity number required!"]
    },
})

const user = mongoose.model("user", userSchema)

module.exports = user
