const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const session = require('express-session');
//const session = require('cookie-session');
dotenv.config();
const passport = require("passport");
const { loginCheck } = require("./auth/passport");
loginCheck(passport);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
 
// Mongo DB conncetion
const database = process.env.MONGOLAB_URI;
mongoose
  .connect(database, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => console.log("database connected"))
  .catch((err) => console.log(err));

app.set("view engine", "ejs");

//BodyParsing
app.use(express.urlencoded({ extended: false }));
app.use(session({
    secret:'oneboy',
    saveUninitialized: true,
    resave: true
  }));
//-momery unleaked---------
// app.set('trust proxy', 1);

// app.use(session({
// cookie:{
//     secure: true,
//     maxAge:60000
//        },
//     store: new RedisStore(),
//     secret: 'secret',
//     saveUninitialized: true,
//     resave: false
// }));

// app.use(function(req,res,next){
// if(!req.session){
//     return next(new Error('Oh no')) //handle error
// }
// next() //otherwise continue
// });
app.use(passport.initialize());
app.use(passport.session());


//Routes
//app.get('/', (req, res) => res.redirect('views/login'))
app.use("/", require("./routes/login"));
app.use("/api/users", require("./routes/api/ussers"));
const PORT = process.env.PORT || 4111;

app.listen(PORT, console.log("Server has started at port " + PORT));