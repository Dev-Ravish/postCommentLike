const mongoose = require('mongoose');


const blogSchema = new mongoose.Schema({
    title:{
        type: String,
        maxLength: 50,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    likes:{
        type:Number,
        required:true,
        default:0
    },

    comments:[{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'Comment'
    }],

    createdAt:{
        type:Date,
        required:true,
        default:Date.now()
    },

    updatedAt:{
        type: Date,
        required: true,
        default: Date.now()
    }
});

module.exports = mongoose.model('Blog', blogSchema);