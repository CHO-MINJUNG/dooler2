const express = require('express');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const path = require('path');
const session = require('express-session');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const passport = require('passport');
const cors = require('cors');
const sharp = require('sharp');

dotenv.config();

const db_config = require(path.join(__dirname, 'config/database.js'));
const connection = db_config.init();
db_config.connect(connection);


const mainRouter = require('./routes/main');
const authRouter = require('./routes/auth');
const officeInfoRouter = require('./routes/office_info');
const officeDeleteRouter = require('./routes/office_delete');
// const smsauthRouter = require('./routes/sms_auth');


const {sequelize} = require('./models');
const passportConfig = require('./passport');

const app = express();
passportConfig();
const PORT = 8000;

app.set('port', process.env.PORT || PORT);

app.use(cors({
  origin:true,
  credentials:true
}));
app.use(express.static(path.join(__dirname, '../build')));

sequelize.sync({force: false})
  .then(() => {
    console.log('데이터베이스 연결 성공');
  })
  .catch((err) => {
    console.error(err);
  });

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(session({
  resave: true,
  saveUninitialized: false,
  secret: process.env.COOKIE_SECRET,
  cookie: {
    httpOnly: true,
    secure: false,
  },
  name:'hi',
}));
app.use(bodyParser.urlencoded({extended:false}));

app.use(passport.initialize());
app.use(passport.session());


app.use('/api', mainRouter);
app.use('/api/auth', authRouter);
app.use('/api/office_info', officeInfoRouter);
app.use('/api/office_info', officeDeleteRouter);
// app.use('/api/sms_auth', smsauthRouter);

// app.get('api/uploads/:ImagePath',(req,res) => {
//   console.log('Cropped image is rendered');
//   const imageFile = path.join(__dirname,`uploads/${req.params.ImagePath}`);

//   sharp(imageFile)
//   .resize({height:parseInt(req.query.size), fit: sharp.fit.contain})
//   .toBuffer((err,data, info) => {
//     res.status(200).end(data);
//   });

  // sharp(imageFile)
  //   .resize({height:parseInt(req.query.size), fit: sharp.fit.contain})
  //   .toBuffer()
  //   .then(
  //     ({ data, info }) => {
  //       console.log(data);
  //       console.log(info);
  //       // res.status(200).send(data)
  //     }
  //   )
  //   .catch(
  //     err => {
  //       console.log(err)
  //     }
  //   );
// });

app.use((req, res, next) => {
    const error =  new Error(`${req.method} ${req.url} 라우터가 없습니다.`);
    error.status = 404;
    next(error);
  });
  
app.listen(PORT, () => {
    console.log(PORT, '번 포트에서 대기 중');
});
