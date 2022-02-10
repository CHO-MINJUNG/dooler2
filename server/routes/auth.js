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


router.get('/me', (req, res) => {
    // 로그인 성공
});
router.get('/join', (req, res) =>{
    // res.sendFile(path.join(__dirname,'../view/join.html'))
});


router.post('/join', isNotLoggedIn, async (req, res, next) => {
  console.log(req.body);
  const { name, email, password, re_password, birth, phone} = req.body; 
  try{
    const isUser = await User.findOne({where: {email}});

    if (isUser){
      return res.send( {message: "이미 가입된 이메일입니다"});    
      res.redirect('/join');
    }
    if(password != re_password){
      res.send('<script type="text/javascript">alert("입력된 비밀번호가 서로 다릅니다.");</script>');    
      return res.redirect('/join');
    }

    const password_encrypted = await bcrypt.hash(password, SALTROUNDS);
    await User.create({
      name:name,
      email:email,
      password:password_encrypted,
      birth:birth,
      phone:phone
    }).then(
      '<script type="text/javascript">alert("가입이 완료되었습니다!");</script>'
    )
    
    return res.end()
  } catch(error){
    console.log(error);
    return next(error);
  }
});

// router.post('/join', (req, res, next) => {
//     const { email, password, re_password, name, birth, sex } = req.body;

//     try {
//         connection.query('SELECT * FROM user WHERE email = ?', [email], function(error, results, fields) {
//             if (error) throw error;
//             if (results.length <= 0 && password===re_password) {
//                 console.log('잘돼고있어')
//                 bcrypt.hash(password, saltRounds, function(err, hash){    
//                     var sql = 'INSERT INTO user (email, password, name, birth, sex) VALUES(?,?,?,?,?)';
//                     var params = [email, hash, name, birth, sex];  
//                     connection.query(sql, params, function(err, rows){          
//                       if(err){                                           
//                        console.log(err);
//                        res.status(500).send("ERROR");}
//                         });
//                 res.send('<script type="text/javascript">alert("회원가입을 환영합니다!"); document.location.href="/";</script>');    
//             })} else if(password!=re_password){                
//                 res.send('<script type="text/javascript">alert("입력된 비밀번호가 서로 다릅니다."); document.location.href="/register";</script>');    
//             }
//             else {
//                 res.send('<script type="text/javascript">alert("이미 존재하는 아이디 입니다."); document.location.href="/register";</script>');    
//             }            
//         })
//         } catch (error) {
//       console.error(error);
//       return next(error);
//     }
//   });

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
  
  router.get('/logout', isLoggedIn, (req, res, ) => {
    req.logout();
    req.session.destroy();
    res.redirect('/');
  })

module.exports = router;