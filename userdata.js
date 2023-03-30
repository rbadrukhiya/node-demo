var express = require('express');
var router = express.Router();
var user = require('../models/user_schema')

/* GET users listing. */
router.post('/',async function(req, res, next) {

    data = await user.create(req.body)
    try{
        res.json(201)({
            status:"success",
            data
        })
    }
    catch(error){
        console.log(error)
    }

});

module.exports = router;
