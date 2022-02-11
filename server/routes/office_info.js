const express = require('express');
const path = require('path');
const multer = require('multer');
const multerS3 = require('multer-s3');
const aws = require('aws-sdk');
const sharp = require('sharp');
const fs = require('fs');

const router = express.Router();

const db_config = require(path.join(__dirname, '../config/database.js'));
const connection = db_config.init();
db_config.connect(connection);

aws.config.loadFromPath(__dirname + '/../config/awsconfig.json');
const s3 = new aws.S3();

let params_key = function (req, file, cb){};

var params = {
  s3: s3,
  bucket: "doolerbucket",
  key: params_key,
  acl: 'public-read' 
}
let upload = multer({
  storage: multerS3(params)
})

const S3URL = "https://doolerbucket.s3.ap-northeast-2.amazonaws.com/";


router.post('/create', (req,res) => {
  // const {contact, fee, imageList, location, mainText, title} = req.body;
  console.log(req.body, 'req.body')
  // var text = fs.readFileSync(req.body.imageList[0]);
  // console.log('동기적 읽기 ' + text);
  let now_office_id=null;
  var filename=null; 

  connection.query(`select count(id) as cnt from Office_Info`,
  (err, rows, field) => {
    if(err) return res.send('office num 불러오기 실패')
    // 새 id 할당
    now_office_id = rows[0].cnt + 1
  })


  for(let i=0; i< imageList.length; i++){
    if(imageList[i]===null) break;
    filename = `uploads/${now_office_id}_${i+1}`

    
    params_key = function(req, file, cb){
      cb(null, filename)
    }
    upload.single(imageList[i])
    console.log(imageList[i])
    // s3.upload(params, function(err, data){
    //   if(err) {
    //     return res.send('s3 업로드에 실패하였음')
    //   }
    //   console.log(data,"업로드 완료");
    // });
    // const upload = new aws.S3.ManagedUpload(params);
    
    // const promise = upload.promise();
  
    // promise.then(
    //   function(data) {
    //     console.log("Successfully uploaded photo.");
    //   },
    //   function(err) {
    //     return console.log("There was an error uploading your photo: ", err.message);
    //   }
    // );
  
  
  }
  // const thumbnail = `${S3URL}uploads/${now_office_id}_1`;
  // const test_id = 0;
  // connection.query( 
  //   `insert office_title, thumbnail, user_id, user_phone, office_location, office_fee, office_content
  //   values(?,?,?,?,?,?,?)
  //   from Office_Info`,
  //   {title, thumbnail , test_id, contact, location,fee, mainText},
  //   (err,rows,field) => {
  //     if (err){
  //       return res.send("office info db 추가 실패")
  //     }
  //     console.log(rows)
  //   }
  // )
  // // connection.query(
  // //     `insert `
  // // )
})

router.get('/update/:id', (req, res) => {
  const id = req.params.id;
  connection.query(
    `select id,
    office_title,
    user_id,
    user_phone,
    office_location,
    office_content,
    create_time,
    from Office_Info
    where id = ?`,
    id,
    (err,rows,field) => {
    }
  )
  if(officeImage ==={}){
  }

  connection.query(
    `select file_name
    from Office_Image
    where office_id = ?`,
    id,
    (err,rows,field) => {
      var imgList=[];
      for(var data of rows){
        imgList.push(data.file_name);
      }
      officeImage.image_link = imgList
      console.log(officeImage)
      res.send(officeImage)
    }
  )
})

router.post('/update/:id', (req, res) => {
  const id = req.params.id;
  const { } = req.body; 
  connection.query(
    `update Office_Info
    set office_title=?, thumbnail=?, user_id=?, user_phone=?, office_location=?, office_content=?
    where office_id =?
    `,
    [,id],
    (err,rows,field) => {
      if(err) console.log("err: "+err);
        // res.render('update success');
    }

  )
})

module.exports = router;