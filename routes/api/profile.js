const express = require('express')
const router = express.Router()


//@route GET api/profile
//@ Test route
//@access Public
router.get('/', (req, res) => res.send('Profiles router'))


module.exports = router