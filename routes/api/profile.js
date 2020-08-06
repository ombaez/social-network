const express = require('express')
const router = express.Router()
const auth = require('../../middleware/auth')
const Profile = require('../../models/Profile')
const User = require('../../models/User')
//@ Get current users profile
//@access Private
router.get('/me', auth, async (req, res) => {
    try {
        const profile = await (await Profile.findOne({ user: req.user.id })).populated('user', ['name', 'avatar'])

        if (!profile) { return res.status(400).json({ msg: 'There is no profile for this user' }) }



    } catch (err) {
        console.error(err.message)
        return res.status(500).send('Server Error')
    }
})


module.exports = router