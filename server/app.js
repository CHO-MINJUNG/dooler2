const express = require('express');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const path = require('path');
const session = require('express-session');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const passport = require('passport');
const cors = require('cors');

dotenv.config();

const db_config = require(path.join(__dirname, 'config/database.js'));
const connection = db_config.init();
db_config.connect(connection);


const mainRouter = require('./routes/main');
const authRouter = require('./routes/auth');

const {sequelize} = require('./models');
const passportConfig = require('./passport');

const app = express();
passportConfig();

const PORT = 8000;

app.set('port', process.env.PORT || PORT);


app.use(cors());
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
  resave: false,
  saveUninitialized: false,
  secret: process.env.COOKIE_SECRET,
  cookie: {
    httpOnly: true,
    secure: false,
  },
}));
app.use(bodyParser.urlencoded({extended:false}));

app.use(passport.initialize());
app.use(passport.session());

app.use('/api/image', express.static('uploads'));
app.use('/api', mainRouter);
app.use('/api/auth', authRouter);

app.use((req, res, next) => {
    const error =  new Error(`${req.method} ${req.url} 라우터가 없습니다.`);
    error.status = 404;
    next(error);
  });
  
app.listen(PORT, () => {
    console.log(PORT, '번 포트에서 대기 중');
});
