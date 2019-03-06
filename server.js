// require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');

//get route
const generals = require('./routes/api/general');
const users = require('./routes/api/users');

const app = express();

//Set body parser for HTTP post operation
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({extended: false})); // support encoded bodies

// passport middleware
app.use(passport.initialize());
//passport config
require('./config/passport')(passport);

// connetion route
app.use('/v1', generals);
app.use('/v1/users', users);

//Set app config
const port = process.env.PORT || 5000;
const baseUrl = ('http://localhost') + ':' + port;


app.listen(port, () => console.log("server run on " + baseUrl));