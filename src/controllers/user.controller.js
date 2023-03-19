const bcrypt = require("bcryptjs");
const { v4: uuidv4 } = require("uuid");
const createError = require("http-errors");
require("dotenv").config();

const { signAccessToken } = require('../middleware/jwt_service')

const db = require("../models/models");
const User = db.User;

const getUserProfile = async (req, res, next) => {
  const userId = req.params.id;
  console.log(userId);
  try {
    const user = await User.findOne({
      where: { id: userId },
    });

    if (!user) {
      throw createError.NotFound("User is not found");
    }

    return res.status(200).send({
      id: user.id,
      email: user.email,
      username: user.username,
    });
  } catch (error) {
    next(error);
  }
};

const login = async (req, res, next) => {
  const { email, password } = req.body;
  const secretKey = process.env.SECRET_KEY || "secret"
  try {
    const user = await User.findOne({
      where: {
        email: req.body.email
      }
    })

    if (!user) {
      throw createError.NotFound("User not found")
    }

    const passwordIsValid = bcrypt.compareSync(password, user.password)
    if (!passwordIsValid) {
      throw createError.Unauthorized("Invalid password")
    }

    const userId = user.id
    const accessToken = await signAccessToken(userId)

    return res.status(200).send({
      id: user.id,
      accessToken: accessToken
    })
  } catch (error) {
    next(error)
  }
};

const logout = async (req, res, next) => {

};

const register = async (req, res, next) => {
  const { username, email, password } = req.body;
  try {
    const user = await User.create({
      id: uuidv4(),
      username: username,
      email: email,
      password: bcrypt.hashSync(password, 10),
    });

    if (!user) { 
      throw createError.InternalServerError("Object cannot be resolved to a type")
    }

    return res.status(200).send({
      message: "User registered successfully!",
    });
  } catch (error) {
    next(error);
  }
};

const refreshToken = async (req, res, next) => {};

module.exports = {
  getUserProfile,
  login,
  logout,
  register,
  refreshToken,
};
