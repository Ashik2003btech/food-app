const mongoose = require('mongoose')

//schema
const userSchema = new mongoose.Schema({
    userName:{
        type:String,
        required:[true, 'user name is required']
    },
    email:{
        type:String,
        required:[true, 'email is required'],
        unique:true
    },
    password:{
        type:String,
        required:[true, 'password is required']
    },
    address:{
        type:Array,
    },
    phone:{
        type:String,
        required:[true, 'phone number is require']
    },
    usertype:{
        type:String,
        required:[true, 'user type is required'],
        default: 'client',
        enum:['client','admin','vendor','driver']
    },
    profile:{
        type:String,
        default:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Ffree-photos-vectors%2Fuser&psig=AOvVaw0gAMYeGTVKxYfL30O2ySqX&ust=1739702929389000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCPD8sKfAxYsDFQAAAAAdAAAAABAk'
    },
    answer:{
        type:String,
        require:[true, 'Answer is required'],
    },
},{timestamps:true})

//export
module.exports = mongoose.model('user',userSchema)