const route = require('express').Router()

const UserRoutes = require('../routes/user-routes')
const AuthRoutes = require('../routes/auth-routes')

route.use("/api/auth", AuthRoutes)
route.use("/api/user", UserRoutes)

module.exports = route