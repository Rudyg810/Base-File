const mongoose = require("mongoose")
const schema3 = new mongoose.Schema({
    heading:{
        type: String,
        required: true,
        trim: true
    },
slug:{
    type: String,
    lowercase: true,
    required: true
},

    time:{
        type: String,
        required: true,
        trim: true
    }, 
    description:{
        type: String,
        required: true,
        trim: true
    },
    byadmin:{
        type: String,
        required: true,
        trim: true
    },
    
    photo:
    {   
        data: Buffer,
        contentType: String
    },
}, {
    timestamps: true
})
module.exports= mongoose.model("eventschema",schema3)