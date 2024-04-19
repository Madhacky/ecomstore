import mongoose from "mongoose";
const userSchema=new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    mobile:Number
})

const usermodel = mongoose.model("user",userSchema);
export default usermodel;