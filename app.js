const express = require('express');
const app = express();
const parser = require('body-parser');
require('dotenv').config({ path: '.env' });
const PORT = process.env.PORT || 3000;
const url = require('./routes/url');
const user = require('./routes/users');
const index = require('./routes/index');
const passport = require('passport')


app.use(passport.initialize());

//Passport Config
require("./middleware/passport")(passport);

//bodyparser middleware
app.use(parser.urlencoded({ extended: false }));
app.use(parser.json());

app.use('/url', url);
app.use('/users', user);
app.use('/', index);

app.listen(PORT, () => console.log(`Server started at port ${PORT}`));
