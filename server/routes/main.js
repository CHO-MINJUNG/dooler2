const express = require('express');
const path = require('path');

const router = express.Router();

const db_config = require(path.join(__dirname, '../config/database.js'));
const connection = db_config.init();
db_config.connect(connection);

router.get('/', (req,res) => {
    connection.query(
        `select id, 
          thumbnail, 
          office_title, 
          office_location, 
          office_deposit,
          office_fee, 
          views_count, 
          create_time 
        from Office_Info
        ORDER BY create_time DESC`,
        (err,rows,field) => {
            return res.send(rows);
        }
    )
})

router.get('/:id', (req,res) => {
  let post_user_id = null;
  
  const id = req.params.id;
  var officeDataset = {};
  connection.query(
    `update Office_Info set views_count=views_count+1 
    where id = ?`,
    id, (err, rows, field) => {
      if (err) {
        console.log(err)
      }
    }
      
  )
  connection.query(
    `select id,
    office_title,
    user_id,
    user_phone,
    office_location,
    address_road,
    office_deposit,
    office_fee,
    office_content,
    create_time,
    views_count,
    sido,
    sigungu,
    roadname
    from Office_Info
    where id = ?`,
    id,
    (err,rows,field) => {
      officeDataset=rows[0];
      if(req.isAuthenticated()){
        // 현재 post를 보낸 사람의 id
        post_user_id = req.user.id;
      } else{
        officeDataset.user_phone = "로그인이 필요합니다"
      }
    }
  )
  // 해당 게시물을 작성한 사람의 id
  let user_id = null;

  connection.query(
    `select user_id
    from Office_Info
    where id = ?`,
    id,
    (err,rows,field) => {
      user_id = rows[0].user_id
        // 사용자와 게시자가 일치하는지
        if (post_user_id === user_id){
        officeDataset.userIsCorrect = true;
      } else{
        officeDataset.userIsCorrect = false;
      }
    }
  )

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
      officeDataset.image_link = imgList
      res.send(officeDataset)
    }
  )
})

router.get('/:id/img', (req,res) => {
    const id = req.params.id;
    connection.query(
        `select image_data
        from Office_Image
        where office_id = ?`,
        id,
        (err,rows,field) => {
            res.send(rows);
        }
    )
});

module.exports = router;