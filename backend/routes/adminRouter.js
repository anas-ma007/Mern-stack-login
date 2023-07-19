const express =require('express')
const adminLogin=require('../controllers/adminControllers')

const router=express.Router()


router.post('/login',adminLogin)






module.exports=router