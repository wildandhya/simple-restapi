const mongoose = require("mongoose")
require("dotenv").config()

const databaseConnection = async ()=>{
    await mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true, useUnifiedTopology: true }).then(()=>{
        console.log("Mongodb Connect")
    }).catch((err)=>{
        console.log("Failed to connect mongodb")
        console.info(err)
    })
}

module.exports = databaseConnection