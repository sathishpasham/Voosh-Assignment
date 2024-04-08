const router = require('express').Router()
const User = require('./models/userModel')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

//registration

router.post('/register', async (req, res) => {
    try {
        const userExists = await User.findOne({
            email: req.body.email
        })
        if (userExists) {
            return res.send({
                success: false,
                message: 'User Already Exists'
            })
        }
        // hashing the password

        const salt = await bcrypt.genSalt(10) //generate 10 random charactors
        const hashedPassword = await bcrypt.hash(req.body.password, salt)
        req.body.password = hashedPassword

        const newUser = new User(req.body)
        await newUser.save()
        res.send({
            success: true,
            message: "Registration successful"
        })


    } catch (error) {
        console.log(error)

    }


})

//login

router.post('/login', async (req, res) => {
    try {
        const user = await User.findOne({
            email: req.body.email
        })
        if (!user) {
            return res.send({
                success: false,
                message: 'user does not exist'
            })
        }
        const validPassword = await bcrypt.compare(req.body.password, user.password)
        if (!validPassword) {
            return res.send({
                success: false,
                message: 'Invalid password'
            })

        }

        //jwt

        const token = jwt.sign({
            userId: user._id
        }, process.env.jwt_secret, {
            expiresIn: "1d"
        })



        res.send({
            success: true,
            message: "user has logged in",
            data: token
        })
    } catch (error) {
        console.log(error)

    }
})
module.exports = router