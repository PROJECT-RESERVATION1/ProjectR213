import mongoose, { models } from 'mongoose'

const Hostelmodels= new mongoose.Schema({
Hostelname:{
    type:String,
    required:true
},
adresse:{
    Street:{type:String,required:true},
    Town:{type:String,required:true},
    country:{type:String,required:true}},

picturePrincipale:{type:String,}
,pictures:{type:String,}
,description:{type:String}
,stars:{type:Number}
,rating:{type:Number}

})
export default new (mongoose.model as any)("hotel",Hostelmodels)