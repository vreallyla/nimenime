const express = require('express');
const router = express.Router();

router.route('/aaaa',(req,res)=>{
    res.send('aaa');
});

module.exports=router;