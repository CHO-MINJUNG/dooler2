const express = require('express');
const path = require('path');
const router = express.Router();

const db_config = require(path.join(__dirname, '../config/database.js'));
const connection = db_config.pool();

const aws = require('aws-sdk');
aws.config.loadFromPath(__dirname + '/../config/awsconfig.json');
const s3 = new aws.S3();

const { isLoggedIn, isNotLoggedIn } = require('./middlewares/auth_middleware');

router.post('/reupload/:id', isLoggedIn, async (req, res) => {
  const id = req.params.id;

  await connection.query(`
    update Office_Info 
    set create_time = now()
    where id= ?
    `,id, 
    (err) =>{
      return res.send({reuploadSuccess:false})
    }
  )
    return res.send({reuploadSuccess:true})
})

module.exports = router;