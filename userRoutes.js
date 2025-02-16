const express = require("express");
const { getUserController, updateUserController, resetPasswordController } = require('../controllers/userController');
const authMiddleware = require("../middlewares/authMiddleware");
const router = express.Router();

//routers
//get user || GET
router.get('/getUser',authMiddleware, getUserController);

//update profile
router.put('/updateUser',authMiddleware,updateUserController);
//reset password
router.post('/resetPassword',authMiddleware,resetPasswordController);

module.exports = router;
