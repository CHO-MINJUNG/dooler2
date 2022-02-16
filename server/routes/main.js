const express = require('express');
const path = require('path');

const router = express.Router();

const db_config = require(path.join(__dirname, '../config/database.js'));
const connection = db_config.init();
db_config.connect(connection);

router.get('/', (req,res) => {
    connection.query(
        `select id, thumbnail, office_title, office_location, office_fee from Office_Info
        ORDER BY create_time DESC`,
        (err,rows,field) => {
            res.send(rows);
        }
    )
})

router.get('/:id', (req,res) => {
  let post_user_id = null;
  if(req.isAuthenticated()){
    // 현재 post를 보낸 사람의 id
    post_user_id = req.user.id;
  }
  const id = req.params.id;
  var officeImage = {};
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
    office_content,
    create_time,
    views_count
    from Office_Info
    where id = ?`,
    id,
    (err,rows,field) => {
      officeImage=rows[0];
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
        // 사용자와 게시자가 맞는지
        if (post_user_id === user_id){
        officeImage.userIsCorrect = true;
      } else{
        officeImage.userIsCorrect = false;
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
      officeImage.image_link = imgList
      res.send(officeImage)
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