import mongoose from 'mongoose'

const HostelModels = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    localisation:{
        type:String,
        required:true
    },
    picture:{
        type:String
    },
    description:{
        type:String
    },
    Price:{
       type:Number 
    }

})
export default new (mongoose.model as any)('hotels',HostelModels)