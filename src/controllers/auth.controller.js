const db = require("../models/models");
const User = db.User
// const config = require("../config/auth.config");

const Op = db.Sequelize.Op;

const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { v4: uuidv4 } = require('uuid');
require('dotenv').config();

exports.signup = async (req, res) => {
  // Save User to Database
  try {
    const user = await db.User.create({
      id: uuidv4(),
      username: req.body.username,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 8),
    });
    if (user) res.send({ message: "User registered successfully!" });

    // if (req.body.roles) {
    //   const roles = await Role.findAll({
    //     where: {
    //       name: {
    //         [Op.or]: req.body.roles,
    //       },
    //     },
    //   });

    //   const result = user.setRoles(roles);
    //   if (result) res.send({ message: "User registered successfully!" });
    // } else {
    //   // user has role = 1
    //   const result = user.setRoles([1]);
    //   if (result) res.send({ message: "User registered successfully!" });
    // }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

exports.signin = async (req, res) => {
  try {
    const user = await db.User.findOne({
      where: {
        username: req.body.username,
      },
    });

    if (!user) {
      return res.status(404).send({ message: "User Not found." });
    }

    const passwordIsValid = bcrypt.compareSync(
      req.body.password,
      user.password
    );

    if (!passwordIsValid) {
      return res.status(401).send({
        message: "Invalid Password!",
      });
    }
    
    const token = jwt.sign({ user_id: user.id }, process.env.SECRET_KEY, {
      expiresIn: 86400, // 24 hours
    });

    // let authorities = [];
    // const roles = await user.getRoles();
    // for (let i = 0; i < roles.length; i++) {
    //   authorities.push("ROLE_" + roles[i].name.toUpperCase());
    // }


    return res.status(200).send({
      id: user.id,
      accessToken: token,
      // roles: authorities,
    });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

exports.signout = async (req, res) => {
  try {
    req.session = null;
    return res.status(200).send({
      message: "You've been signed out!"
    });
  } catch (err) {
    this.next(err);
  }
};