const express = require('express');
const path = require('path');
const router = express.Router();

const db_config = require(path.join(__dirname, '../config/database.js'));
const connection = db_config.pool();

const aws = require('aws-sdk');
aws.config.loadFromPath(__dirname + '/../config/awsconfig.json');
const s3 = new aws.S3();

const { isLoggedIn, isNotLoggedIn } = require('./middlewares/auth_middleware');

router.post('/delete/:id', isLoggedIn, async (req, res) => {
  const id = req.params.id;
  
  // await connection.query(
  //   `select file_name from Office_Image where office_id = ?`,
  //   id, (err, rows) =>{
  //     console.log("이것도?")
  //     for(var data of rows){
  //       console.log("for문은 돌아")
  //       const s3_params = {
  //         Bucket: "doolerbucket",
  //         Key: data.file_name
  //       }
  //       console.log(data.file_name)
  //     s3.deleteObject(s3_params, function(err, data) {
  //       console.log("삭제 실행 ...")
  //       if (err) console.log(err);
  //       else console.log(data);
  //     })
  //     }
  //   }
  // )


  await connection.query(
    `delete from Office_Image where office_id = ?`,
    id, (err) =>{
      return res.send({deleteSuccess:false})
    }
  )
  await connection.query(
    `delete from Office_Info where id = ?`,
    id, (err) =>{
      return res.send({deleteSuccess:false})
    }
  )
    return res.send({deleteSuccess:true})
})

module.exports = router;