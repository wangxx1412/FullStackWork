const express = require("express");//node js doesnt support ES 2015, like import xx from 'xx'
const mongoose = require ('mongoose');
mongoose.Promise = global.Promise;
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
require('./models/User');
require("./services/passport");//noth returned from passport


mongoose.connect(keys.mongoURI);//connect to mongodb

const app = express();

app.use(
  cookieSession({
    maxAge:24*60*60*1000,
    keys:[keys.cookieKey]
  })
);

app.use(passport.initialize());
app.use(passport.session());

//returns an exported function and then call app
require("./routes/authRoutes")(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
