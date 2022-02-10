const passport = require('passport');
const local = require('./localStrategy');
const User = require('../models/User');

module.exports = () => {
    passport.serializeUser((user, done) => {
      // req.session에 저장할 데이터 
      console.log(user.email)
      done(null, user.email);
    });
    passport.deserializeUser((email, done) => {
      console.log(email)
      User.findOne({
        where: { email },
      })
        .then(user => done(null, user))
        .catch(err => done(err));
    });
  
    local();
  };