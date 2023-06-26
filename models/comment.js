const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    user:{
        type: String,
        required: true
    },

    description:{
        type:String,
        required:true
    }

    
});

module.exports = mongoose.model('Comment', commentSchema);