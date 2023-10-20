import { ObjectId } from "mongodb"
import mongoose from "mongoose"

const ReservationModel= new mongoose.Schema({
    userID:{
        type:mongoose.Types.ObjectId,
        ref:"users",required:true
    },
    offerID:{
        type:mongoose.Types.ObjectId,
        ref:"offers",required:true
    },
    hostelID:{
        type:mongoose.Types.ObjectId,
        ref:"users",required:true
    },
    CheckInDate:{
        type:Date,required:true
    },
    CheckOutDate:{
        type:Date,required:true
    },
    amount:{
        type:Number,
    },
    payStatus:{
        type:Boolean,
        default:false,
        required:true,
    }
})
export default new (mongoose.model as any )("reservations",ReservationModel)