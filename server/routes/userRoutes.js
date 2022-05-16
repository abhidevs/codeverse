const express = require('express')
const { register, login, searchUser } = require('../controlers/userControlers')
const protected = require('../middleware/authMiddleware')
const router = express.Router()

router.post('/register', register)
router.post('/login', login)
router.get('/', protected, searchUser)

module.exports = router