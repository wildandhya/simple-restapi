const router = require('express').Router()

const UserController = require('../controller/user-controller')
const {Authentication} = require('../middleware/authentication')

router.get("/", Authentication,UserController.getUser)
router.get("/account/:id", Authentication, UserController.getUserByAccountNumber)
router.get("/identity/:id", Authentication, UserController.getUserByIndentityNumber)
router.post("/", Authentication, UserController.createUser)
router.put("/:id", Authentication, UserController.updateUser)
router.delete("/:id", Authentication, UserController.deleteUser)

module.exports = router