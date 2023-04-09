const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema;


const postSchema = new mongoose.Schema({
    title:{
        type:String,
        trim:true,
        min:3,
        max:22260,
        required:true
    },
    slug:{
        type:String,
        unique:true,
        index:true,
        max:222160,
        lowercase:true
    },
    content:{
        type:{},
        required:true,
      
    },
    user:{
        type:String,
        default:'Admin'
    },
    
},{timestamps:true})


module.exports = mongoose.model('PostCRUD',postSchema)