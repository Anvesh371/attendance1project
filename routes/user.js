const express=require('express');
const userController=require("../controllers/userController");
const userMiddleware=require('../middlewares/userMiddleware');
const tokenMiddleware=require('../middlewares/tokenMiddleware');
const router=express.Router();
router.get("/users",userController.users)
router.post("/register",userMiddleware.userNameCheck,userMiddleware.emailCheck,userMiddleware.passwordCheck,userController.register)
router.post("/login",userMiddleware.emailCheck,userMiddleware.passwordCheck,userController.login)
router.get("/userinfo",tokenMiddleware.tokenCheck,userController.userinfo)
router.delete('/:userId',userController.deleteUser)
module.exports=router;