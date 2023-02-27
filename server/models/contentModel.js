const mongoose = require('mongoose')

const contentSchema = new mongoose.Schema({
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
    user:{
        type:String,
        require:true
    },
    userName:{
        type:String,
        require:true
    },
    userProfile:{
        type:String,
        require:true
    },
    isVerified:{
        type:Boolean,
        default:false
    }
},{
    timestamps:true
})
module.exports = mongoose.model('Content',contentSchema)