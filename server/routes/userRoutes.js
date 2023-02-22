const router = require('express').Router()
const {loginUser,register,deleteUser,updateUserInfo,getUsers} = require('../handlers/userHandler')

router.post('/login',loginUser)
router.post('/register',register)
router.put('/:id',updateUserInfo)
router.delete('/:id',deleteUser)
router.get('/',getUsers)

module.exports = router