const mongoose = require('mongoose')

const userSchema = mongoose.Schema(
    
    {
      
    name : {
        type : String,
        required : [true, 'Type a name']
    },
    email :{
        type: String,
        required : [true,  'Add a email'],
        unique: true
    },
    password:{
        type: String,
        required : [true, "Enter the password"]
    }

},{
    timestamps : true
})

module.exports = mongoose.model('User', userSchema)