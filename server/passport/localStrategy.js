const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');

const User = require('../models/User');

// done(error 여부, 결과 값, 실패하였을 경우의 정보)
module.exports = () => {
  passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
  }, async (email, password, done) => {
    try {
      const isUser = await User.findOne({ where: { email } });

      if (!isUser) {
        done(null, false, { message: '가입되지 않은 회원입니다.' });
      }
      
      const isPasswordCorrect = await bcrypt.compare(password, isUser.password);
      if (isPasswordCorrect) {
        done(null, isUser);
      } else {
        done(null, false, { message: '비밀번호가 일치하지 않습니다.' });
      }

    } catch (error) {
      console.error(error);
      done(error);
    }
  }));
};