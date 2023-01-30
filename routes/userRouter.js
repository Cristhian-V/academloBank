const {Router} =require('express')
const { findAllUsers, createAccuont, UserLogin, showHistoryUser} = require('../controllers/userController')

const router = Router()

router.get('/', findAllUsers)

router.post('/signup', createAccuont)

router.post('/login', UserLogin)

router.get('/:id/history', showHistoryUser)

module.exports = {
  userRouter: router
}