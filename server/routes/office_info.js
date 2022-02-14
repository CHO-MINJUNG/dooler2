const express = require('express');
const path = require('path');
const router = express.Router();

const db_config = require(path.join(__dirname, '../config/database.js'));
const connection = db_config.pool();

const { isLoggedIn, isNotLoggedIn } = require('./middlewares/auth_middleware');


let s3 = require("./utils/img_s3")

router.get('/create', isLoggedIn, (req,res) => {
})

router.post('/create', s3.upload.array('image'), (req,res) => {
  const {contact, fee, location, mainText, title} = req.body;  
  const test_id = 0;
  let now_office_id = null;
  console.log(req.files);
  
  const insert_office = {
    office_title: title, 
    thumbnail: req.files[0].location, 
    user_id: test_id, 
    user_phone: contact, 
    office_location: location, 
    office_fee: fee, 
    office_content: mainText
  }
  let insert_db = async () => {
    try{
      await connection.query(`INSERT INTO Office_Info SET ?`, insert_office);

      const [rows, fields] = await connection.query(`SELECT id 
      FROM Office_Info ORDER BY id DESC LIMIT 1;`)
      
      now_office_id=rows[0].id;

      for (var img of req.files){
        await connection.query( 
          `INSERT INTO Office_Image SET ?`,
          {office_id: now_office_id, 
            file_name: img.location}
        )
      }
    } catch(err) {
      console.log(err)
      throw err;
    }
  }
insert_db()
  .then(res.send({createSuccess:true}))

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