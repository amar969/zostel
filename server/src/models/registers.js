const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
    firstname : {
        type:String,
        required:true
    },
    middlename : {
        type:String,
    },
    lastname: {
        type:String,
        required:true
    },
    gender: {
        type:String,
        required:true
    },  
    email: {
        type:String,
        required:true,
        unique:true
    },
   
    phone: {
        type:Number,
        required:true,
        unique:true
    },
    address: {
        type: String,
        required: true
      }
    
})


// now we need to create a collections

const Register = new mongoose.model("Register", employeeSchema);

module.exports = Register;