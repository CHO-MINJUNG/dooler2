const express = require('express');
const path = require('path');

const router = express.Router();

const db_config = require(path.join(__dirname, '../config/database.js'));
const connection = db_config.init();
db_config.connect(connection);

router.get('/', (req,res) => {
    connection.query(
        "select office_info_id, thumbnail, office_title, office_location from Office_Info",
        (err,rows,field) => {
            console.log(rows)
            res.send(rows);
        }
    )
})

router.get('/:id', (req,res) => {
    const id = req.params.id;
    connection.query(
        `select 
            office_info_id, 
            thumbnail, 
            office_title, 
            office_location 
        from Office_Info
        where office_info_id = ?`,
        id,
        (err,rows,field) => {
            console.log(rows)
            res.send(rows);
        }
    )
})

module.exports = router;