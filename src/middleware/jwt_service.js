const jwt = require("jsonwebtoken");
const createError = require("http-errors");
require("dotenv").config();

const signAccessToken = async (userId) => {
    return new Promise( (resolve, reject) => {
        const payload = {
            userId
        }
        const secret = process.env.SECRET_KEY
        const options = {
            expiresIn: '1h'
        }

        jwt.sign(payload, secret, options, (err, token) => {
            if (err) reject(error)
            resolve(token)
        })
    })
}

const verifyToken = (req, res, next) => {
    if(!req.headers['authorization']) {
        throw createError.Unauthorized('non authorization field')
    }
    const authHeader = req.headers['authorization']
    // throw new Error(`${authHeader}`)
    const bearerToken = authHeader.split(' ')
    const token = bearerToken[1]

    // verify Token
    jwt.verify(token, process.env.SECRET_KEY, (err, payload) => {
        if (err) {
            throw createError.Unauthorized("non token")
        }
        req.payload = payload
        next()
    })
}

module.exports = {
    signAccessToken,
    verifyToken
}