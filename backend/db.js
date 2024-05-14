const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type:String,
        required:true,
        unique:true,
        trim:true,
        lowercase:true,
        minLength:3,
        maxLength:30
    },
    password: {
        tyep:String,
        required:true,
        minLength:6
    },
    firstName: {
        type:String,
        required:true,
        trim:true,
        maxLength:50
    },
    lastName: {
        type:String,
        required:true,
        trim:true,
        maxLength:50
    }
});

const User = mongoose.model('User',userSchema);

const accountSchema = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    balance:{
        type:number,
        required:true
    }
});

const Account = mongoose.model("Account",accountSchema);

module.exports={
    User,
    Account
};