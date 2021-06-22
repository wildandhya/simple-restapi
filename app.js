const express = require("express")
require("dotenv").config()

const PORT = process.env.PORT || 2021
const mainRoute = require('./src/routes') 

// setup server
const app = express()

// setup db connection
require('./src/config/db-config')()

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(mainRoute)
app.use(require('./src/middleware/errHandler'))

app.listen(PORT, ()=>{
    console.log(`Server listening at port ${PORT}`)
})