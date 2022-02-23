const express = require('express');
const path = require('path');
const router = express.Router();

const db_config = require(path.join(__dirname, '../config/database.js'));
const connection = db_config.init();
db_config.connect(connection);

const aws = require('aws-sdk');
aws.config.loadFromPath(__dirname + '/../config/awsconfig.json');
const s3 = new aws.S3();

const { isLoggedIn, isNotLoggedIn } = require('./middlewares/auth_middleware');

router.post('/delete/:id', isLoggedIn, (req, res) => {
  const id = req.params.id;
  console.log("왜");
  connection.query(
    `select * from Office_Image where office_id = ${id}`,
    (err, rows) =>{
      // if(err) console.log(err);
      console.log("이것도?")
      let deleteList = {}
      let s3_params = {
        Bucket: "doolerbucket",
        Delete: {
          'Objects':[]
        }      
      }

      for(var data of rows){
        const sliceFile = data.file_name.split("https://doolerbucket.s3.ap-northeast-2.amazonaws.com/");
        console.log()
        s3_params.Delete.Objects.push({"Key": sliceFile[1]})
      }
      console.log(s3_params.Delete.Objects)      
      s3.deleteObjects(s3_params, function(err, data) {
        if (err) res.send({deleteSuccess:false})
      })
      return res.send({deleteSuccess:true})
    }
  )
  connection.query(
    `delete from Office_Image where office_id = ?`,
    id, (err) =>{
      if(err) res.send({deleteSuccess:false})
    }
  )
  connection.query(
    `delete from Office_Info where id = ?`,
    id, (err) =>{
      if(err) res.send({deleteSuccess:false})
    }
  )
})

module.exports = router;