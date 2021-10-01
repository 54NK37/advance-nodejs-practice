const mongoose = require('mongoose')

const postSchema =new mongoose.Schema({
    'title' : {
        required : true,
        type : String
    },
    'description' :{
        required  : true,
        type : String
    },
    'date' : {
        type  : Date,
        default : Date.now()
    },
    'views' :{
        type : Number,
        default : 0
    }
})

const Post = new mongoose.model('Post',postSchema)

module.exports = Post