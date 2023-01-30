const {Router} = require('express')
const {transfer} = require('../controllers/transferControllers')

const router = Router()

router.post('/', transfer)

module.exports = {
  transferRouter: router
}