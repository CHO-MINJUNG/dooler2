const express = require('express');
const path = require('path');
const passport = require('passport');
const bcrypt = require('bcrypt');

const SALTROUNDS = 12;
const { isLoggedIn, isNotLoggedIn } = require('./middlewares/auth_middleware');
const  User  = require('../models/User');

const router = express.Router();

const db_config = require(path.join(__dirname, '../config/database.js'));
const connection = db_config.init();
db_config.connect(connection);

router.get('/session', (req, res) => {
  console.log(req.isAuthenticated())
  res.send({"isLoggedIn":req.isAuthenticated()});
})

router.post('/join', isNotLoggedIn, async (req, res, next) => {
  const { name, email, password, re_password, birth, phone} = req.body; 
  try{
    const isUser = await User.findOne({where: {email}});

    if (isUser){
      return res.send( {message: "이미 가입된 이메일입니다"});    
    }
    if(password != re_password){
      return res.send({message:"입력된 비밀번호가 서로 일치하지 않습니다"})
    }

    const password_encrypted = await bcrypt.hash(password, SALTROUNDS);
    await User.create({
      name:name,
      email:email,
      password:password_encrypted,
      birth:birth,
      phone:phone
    })
    return res.send({createUser:true})

  } catch(error){
    console.log(error);
    return res.send(error);
  }
});

// authenticate(전략, 콜백함수(앞의 전략(local)에서 done함수 결과값들을 차례대로 받아오게 하는 것))
  router.post('/login',isNotLoggedIn, (req, res, next) => {
    passport.authenticate('local', (authError, isUser, info) => {
      if (authError) {
        console.error(authError);
        return next(authError);
      }
      if (!isUser) {
        return res.send({userLogin:false, message: info.message})
      }
      
      return req.login(isUser, (loginError) => {
        if (loginError) {
          return next(loginError);
        } 
        return res.send({userLogin:true});
      });
    })(req, res, next) ; // 미들웨어 내의 미들웨어에는 (req, res, next)를 붙입니다.
  });
  
  router.get('/logout', isLoggedIn, (req, res) => {
    req.logout();
    req.session.destroy();
    return res.send({logoutSuccess:true})
  })

  router.get('/kakao', passport.authenticate('kakao'));
  
  router.get('/kakao/callback', passport.authenticate('kakao', {
    failureRedirect: '/',
  }), (req, res) => {
    res.send({userLogin:true});
  })

module.exports = router;