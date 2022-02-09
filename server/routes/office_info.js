const express = require('express');
const path = require('path');

const router = express.Router();

const db_config = require(path.join(__dirname, '../config/database.js'));
const connection = db_config.init();
db_config.connect(connection);

router.post('/create', (req,res) => {
    const { } = req.body; 
    connection.query(
        `insert office_title, thumbnail, user_id, user_phone, office_location, office_content
        values()
        from Office_Info`,
        (err,rows,field) => {
            console.log(rows)
        }
    )
    connection.query(
        `insert `
    )
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