const mongoose = require('mongoose')

const contentSchema = new mongoose.Schema({
    title:{
        type:String,
        require:true
    },
    body:{
        type:String,
        require:true
    },
    image1:{
        type:String,
        require:false
    },
    image2:{
        type:String,
        require:false
    },
    tags:{
        type:Array,
    },
    category:{
        type:String,
        require:false
    },
    likes:{
        type:Array,
    },
    comments:{
        type:Array,
    },
    replies:{
        type:Array,
    },
    user:{
        type:String,
        require:true
    }
},{
    timestamps:true
})
module.exports = mongoose.model('Content',contentSchema)