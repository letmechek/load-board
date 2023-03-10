const express = require('express')
const router = express.Router()
const loadsCtrl = require('../../controllers/api/loads')
const ensureLoggedIn = require('../../config/ensureLoggedIn')


router.post('/', loadsCtrl.create)
router.get('/', loadsCtrl.index)


module.exports = router