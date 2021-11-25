const express=require('express');
const tokenMiddleware=require('../middlewares/tokenMiddleware');
const classMiddleware=require('../middlewares/classMiddleware');
const classController=require("../controllers/classController");
const router=express.Router();
router.post("/addClass",classMiddleware.classNameCheck,classMiddleware.branchCheck,tokenMiddleware.tokenCheck,classController.addClass)
router.get("/classInfo",tokenMiddleware.tokenCheck,classController.classInfo)
router.get("/classes",classController.classes)
router.delete('/delete/:classId',classController.deleteClass);
module.exports=router;  