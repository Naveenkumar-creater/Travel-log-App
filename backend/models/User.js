const mongoose=require('mongoose');

const UserSchema =new mongoose.Schema(
{
    username:{type:String,require,max:50,unique:true},
    email:{type:String,require,max:50,unique:true},
    password:{type:String,require,min:6},
},
{
    timestamps:true
}

);

module.exports=mongoose.model("User",UserSchema);