const express = require('express');
const path = require('path');
const router = express.Router();

const db_config = require(path.join(__dirname, '../config/database.js'));
const connection = db_config.pool();

const { isLoggedIn, isNotLoggedIn } = require('./middlewares/auth_middleware');


let s3 = require("./utils/img_s3")



router.get('/update/:id', (req, res) => {
  const id = req.params.id;
  var officeImage = {};
  
  connection.query(
    `select id,
    office_title,
    user_id,
    user_phone,
    office_location,
    address_road,
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
  
  router.post('/update/:id', (req, res) => {
    const id = req.params.id;
    const {contact, fee, location, mainText, title, address} = req.body;  

    const update_office = {
      office_title: title, 
      thumbnail: req.files[0].location, 
      user_id: user_id, 
      user_phone: contact, 
      office_location: location, 
      office_fee: fee, 
      office_content: mainText,
      address_zipcode: address.zipcode,
      address_road: address.road,
      address_detail: address.detail
    }

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