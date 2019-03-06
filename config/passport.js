const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const User = require('../models/User');

//get .env
require('dotenv').config();

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.JWT_KEY;
// opts.issuer = 'accounts.examplesoft.com';
// opts.audience = 'yoursite.net';
module.exports = passport => passport.use(new JwtStrategy(opts, function (jwt_payload, done) {
    User.findOne({where: {kode: jwt_payload.id}}).then(user => {
        res.json(user)
    });

    console.log(jwt_payload);
}));

