const  mongoose = require("mongoose")

const schema1 = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        trim: true
    },

    email:{
        type: String,
        required: true,
        trim: true
    },
    password:{
        type: String,
        required: true,
        trim: true
    },
    phone:{
        type: String,
        required: true,
        trim: true
    },

    role:
    {
        type: Number,
        required: false,
        default: 0
    }
}, {
    timestamps: true
})
module.exports = mongoose.model("UserAuth", schema1)
