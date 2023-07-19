const express =require('express')
const {
    adminHome,
    adminLogin
  } = require("../controllers/adminControllers");

const router=express.Router()

router.get('/',adminHome)

router.post('/login',adminLogin)




module.exports = router;