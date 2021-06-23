const router = require('express').Router()

const UserController = require('../controller/user-controller')


router.get("/", UserController.getUser)
router.get("/account",UserController.getUserByAccountNumber)
router.get("/identity", UserController.getUserByIndentityNumber)
router.post("/",  UserController.createUser)
router.put("/update/:id", UserController.updateUser)
router.delete("/delete/:id",  UserController.deleteUser)

module.exports = router