const mongoose = require('mongoose')

const vacationSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    location:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    },
    photo:{
        type:String,
        require:true
    },
    userProfile:{
        type:String,
        require:true
    },
    userName:{
        type:String,
        require:true
    }
},{
    timestamps:true
})
module.exports = mongoose.model('Vacation',vacationSchema)