const express = require("express");//node js doesnt support ES 2015, like import xx from 'xx'
const mongoose = require ('mongoose');//Common JS module that nodeJS support for.
mongoose.Promise = global.Promise;
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
require('./models/User');
require("./services/passport");//mind the order of require of model class and passport


mongoose.connect(keys.mongoURI);//connect to mongodb

const app = express();

//express use cookie in app
app.use(
  cookieSession({
    maxAge:24*60*60*1000,
    keys:[keys.cookieKey]
  })
);

app.use(passport.initialize());
app.use(passport.session());

//returns an exported function and then call app as argument of it
require("./routes/authRoutes")(app);

//Heroku inject enviornment varible
const PORT = process.env.PORT || 5000;
app.listen(PORT);
