const express=require('express');
const router=express.Router();
const logOutController=require('../controller/logOutController');

router.post('/',logOutController.logOut);

module.exports=router;