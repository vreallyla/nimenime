const bcrypt = require('bcryptjs');
const uid = require('node-uid');
const User = require('../models/User');
const resM = require('../config/res');

/**
 * @route   : POST /v1/register
 * @desc    : register user
 * @access  : public
 */
exports.register = (req, res) => {
    const data = req.body,
        salt = bcrypt.genSaltSync(10);

    User.create({
        kode: uid(20),
        nama: data.name,
        email: data.email,
        password: bcrypt.hashSync(data.password, salt),
    }).then(newUser => {
        resM(res, newUser, null, "register successfully!", 201);
    }).catch(err => resM(res, null, null, "server timeout..", 409));
};

/**
 * @route   : POST /v1/login
 * @desc    : login user
 * @access  : public
 */
exports.login = (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    //check user exists
    User.findOne({ where: {email: email},attributes: ['kode',  'email'], defaults: {email: 'Technical Lead JavaScript'} })
        .then(
        function(user) {return res.json(user) },
        function(err) { return res.json(err)}
    );
};

