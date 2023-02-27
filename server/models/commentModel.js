const mongoose =  require('mongoose')

const commentSchema = new mongoose.Schema({
    userProfile:{
        type:String,
        require:false
    },
    userName:{
        type:String,
        require:false
    },
    content:{
        type:String,
        require:true
    },
    post:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Content"
    },
 
},{
    timestamps:true
})
module.exports = mongoose.model('Comment',commentSchema)