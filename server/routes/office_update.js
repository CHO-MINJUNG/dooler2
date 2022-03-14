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
  


  router.post('/update/:id', isLoggedIn, s3.upload.array('image'),  (req, res) => {
    const id = req.params.id;
    const {contact, deposit, fee, location, mainText, title, zipcode, road, detail} = req.body;  
    const user_id = req.user.id;

    const update_office = {
      office_title: title, 
      thumbnail: req.files[0].location, 
      user_id: user_id, 
      user_phone: contact, 
      office_location: location, 
      address_zipcode: zipcode,
      address_road: road,
      address_detail: detail,
      office_deposit: deposit,
      office_fee: fee, 
      office_content: mainText
    }

    let update_db = async () => {
      try{
        await connection.query(
          `update Office_Info
          set office_title=?, thumbnail=?, user_id=?, user_phone=?, office_location=?, office_content=?
          where office_id =${id}
          `,
          update_office,
          (err,rows,field) => {
            if(err) console.log("err: "+err);
              // res.render('update success');
          }
        )

        for (var img of req.files){
          await connection.query( 
            `INSERT INTO Office_Image SET ?`,
            {office_id: id, 
              file_name: img.location}
          )
        }

      } catch (err) {
        console.log(err)
        throw err;
      }
    }

    
  })


module.exports = router;