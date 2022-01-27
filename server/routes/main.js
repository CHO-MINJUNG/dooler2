const express = require('express');
const path = require('path');

const router = express.Router();

const db_config = require(path.join(__dirname, '../config/database.js'));
const connection = db_config.init();
db_config.connect(connection);

router.get('/', (req,res) => {
    connection.query(
        "select id, thumbnail, office_title, office_location from Office_Info",
        (err,rows,field) => {
            console.log(rows)
            res.send(rows);
        }
    )
})

router.get('/:id', (req,res) => {
    const id = req.params.id;
    connection.query(
        `select id,
        office_title,
        user_name,
        user_phone,
        office_location,
        office_content,
        create_time,
        views_count
        from Office_Info
        where id = ?`,
        id,
        (err,rows,field) => {
            console.log(rows)
            res.send(rows);
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
            console.log(rows)
            res.send(rows);
        }
    )
})

// select 
//             office_info_id as id, 
//             thumbnail as img, 
//             office_title as title, 
//             office_location as location
//         from Office_Info 
module.exports = router;