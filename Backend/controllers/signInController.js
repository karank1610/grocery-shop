const user = require("../models/User")
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt')

async function handleGet(req, res) {
    try {
        const data = await user.find();
        res.status(200).json(
            {
                status: "true",
                data: data,
            }
        )
    } catch (error) {
        res.status(400).json({
            status: "false",
            error: error.massage,
        })
    }
}

async function handlePost(req, res) {
    const cryptPassword = await bcrypt.hash(req.body.password, 12);
    const newUser = {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        password: cryptPassword,

    }

    try {
        const data = await user.create(newUser);
        res.status(200).json(
            {
                status: "true",
            }
        )
    } catch (error) {
        res.status(400).json({
            status: "false",
            error: error.message,
        })
    }
}

async function handleLogin(req, res) {
    try {
        const data = await user.findOne({ email: req.body.email });
        if (!data) {
            res.status(400).json({
                status: "false",
                error: "Invalid Email!",
            })
        }
        else {
            var encrypt = await bcrypt.compare(req.body.password, data.password);
            if (encrypt) {
                var token = jwt.sign({ id: data._id }, 'abc', { expiresIn: '5m' });
                res.status(200).json({
                    status: "true",
                    data: data,
                    token: token,
                })
            }
            else {
                res.status(400).json({
                    status: "false",
                    error: "Invalid Password!"
                })
            }
        }
    } catch (error) {
        res.status(400).json({
            status: "false",
            error: error.message
        })
    }
}

async function handleVerify(req, res) {
    try {
        var decoded = jwt.verify(req.body.token, 'abc');
        res.status(200).json(
            {
                status: "true",
                data: decoded
            }
        )
    } catch (error) {
        res.status(400).json(
            {
                status: "false",
                error: error.message,
            }
        )
    }
}

module.exports = { handleGet, handlePost, handleLogin, handleVerify };