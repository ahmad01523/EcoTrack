import {Schema, model} from 'mongoose';

const userSchema = new Schema({
    userName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required: true,
        unique: true
    },
    password:{
        type:String,
        required:true,

    },
    confirmEmail:{
        type:Boolean,
        default:false,
    },
    age:{
        type: Number,
    },
    salary:Number,
    gender:{
        type:String,
        default:'Male',
        enum:['Male','Female'],
    },


},{
    timestamps:true,
});


const userModel = model('User', userSchema);

export default userModel;