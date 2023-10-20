import mongoose, { models } from 'mongoose'

const Hostelmodels= new mongoose.Schema({
name:{
    type:String,
    required:true
},
localisation:{
    type:String,
    required:true
},
picture:{
    type:String,
},
description:{
    type:String
},chambre:{simple:{type:Number},double:{type:Number}}
})
export default new (mongoose.model as any)("hotel",Hostelmodels)