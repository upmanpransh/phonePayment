const mongoose = require('mongoose');
const {Schema}=mongoose;

mongoose.connect("mongodb://127.0.0.1:27017/phonepayment");

const userSchema = new mongoose.Schema({
    username: {
        type:String,
        unique:true,
        trim:true,
        lowercase:true
    },
    password: {
        tyep:String
    },
    firstName: {
        type:String,
        trim:true
    },
    lastName: {
        type:String,
        trim:true
    }
});


const User = mongoose.model('User',userSchema);

const accountSchema = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    balance:{
        type:Number
    }
});

const Account = mongoose.model("Account",accountSchema);

module.exports={
    User,
    Account
};