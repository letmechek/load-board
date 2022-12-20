const express = require('express')
const router = express.Router()
const trucksCtrl = require('../../controllers/api/trucks')
const ensureLoggedIn = require('../../config/ensureLoggedIn')


router.post('/', trucksCtrl.create),
router.get('/', trucksCtrl.show)


module.exports = router