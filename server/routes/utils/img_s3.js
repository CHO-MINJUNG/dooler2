const aws = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');
const path = require('path');
const {v4} = require('uuid');
// config
aws.config.loadFromPath(__dirname + '/../../config/awsconfig.json');
const s3 = new aws.S3();
// import {v4} from 'uuid';

let s3Storage = multerS3({
  s3: s3,
  bucket: "doolerbucket",
  key: function(req, file, cb) {
    let extension = path.extname(file.originalname);
    cb(null, `uploads/${v4()}-${Date.now()}${extension}`);
  },
  acl: 'public-read-write',
  contentDisposition: 'attachment',
  serverSideEncryption: 'AES256'
});

exports.upload = multer({ storage: s3Storage });