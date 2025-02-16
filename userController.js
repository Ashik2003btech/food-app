//get user info
const userModel = require("../models/userModel");

//print req to print the decoded value
const getUserController = async (req,res) => {
    try{
        //find user
        const user = await userModel.findById({_id:req.body.id});
        //validation
        if(!user){
            return res.status(404).send({
                success:false,
                message:'User Not Found'
            })
        }
        //hidden password
        user.password = undefined
        //resp
        res.status(200).send({
            success:true,
            message:'User get Successfully',
            user,
        })
    }catch(error){
        console.log(error)
        res.status(500).send({
            success:false,
            message:'Error in Get User API',
            error
        })
    }
};
//UPDATE user
const updateUserController = async(req,res) => {
    try{
        //find user
        const user = await userModel.findById({_id: req.body.id})
        //validation
        if(!user){
            return res.status(404).send({
                success:false,
                message:'user not found'
            })
        }
        //UPDATE
        const {userName,address,phone} = req.body
        if(userName) user.userName = userName
        if(address) user.address = address
        if(phone) user.phone = phone 
        //save user
        await user.save()
        res.status(200).send({
            success:true,
            message:"User Updated Successfully",
        })
    }catch(error){
        console.log(error)
        res.status(500).send({
            success:false,
            message:'Error In Updating User API',
            error
        })
    }

}
//reset password
const resetPasswordController = async(req,res) => {
    try{
        const {email,newPassword,answer} = req.body
        if(!email || !newPassword || !answer){
            return res.status(500).send({
                success:false,
                message:'Please Provide All Fields'
            })
        }
        const user = await userModel.findOne({email,answer})
        if(!user){
            return res.status(400).send({
                success:false,
                message:'User Not Found or Invalid Answer'
            });
        }
        //hashing password
        var salt = bcrypt.genSaltSync(10);
        const hashedPassword = await bcrypt.hash(newPassword, salt);
        user.password = hashedPassword
        await user.save()
        res.status(200).send({
            success:true,
            message:'Password Reset Successfully'
        });
    }catch(error){
        console.log(error)
        res.status(500).send({
            success:false,
            message:'error in Password Reset API',
            error
        })
    }
}

module.exports = {getUserController,updateUserController,resetPasswordController};