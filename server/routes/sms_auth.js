const express = require('express');
const path = require('path');

const { isLoggedIn, isNotLoggedIn } = require('./middlewares/auth_middleware');
const  User  = require('../models/User');

const router = express.Router();

router.post('/jo', isNotLoggedIn, async (req, res, next) => {
    console.log(req.body);
    const { email, password, re_password, name, birth} = req.body; 
    try{
      const isUser = await User.findOne({where: {email}});
  
      if (isUser){
        res.send('<script type="text/javascript">alert("이미 가입된 이메일입니다."); </script>');    
        return res.redirect('/join');
      }
      if(password != re_password){
        res.send('<script type="text/javascript">alert("입력된 비밀번호가 서로 다릅니다.");</script>');    
        return res.redirect('/join');
      }
  
      const password_encrypted = await bcrypt.hash(password, SALTROUNDS);
      await User.create({
        birth:birth,
        email:email,
        name:name,
        password:password_encrypted,
      });
      
      return res.redirect('/');
    } catch(error){
      console.log(error);
      return next(error);
    }
  });