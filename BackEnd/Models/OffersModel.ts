import mongoose from "mongoose";
import UserModel from "./UserModel";

const OffersModel = new mongoose.Schema({
    offerName:{
        type: String,
        required: true
    },
    offerType: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    status: {
        type: Boolean,
        default: false,
        required: true
    },
    offerRating: {
        type: Number,
        required: true
    },
    owner: {
        type: mongoose.Types.ObjectId,
        ref: "hotel",
        required: true
    }
})
export default new (mongoose.model as any)("offers", OffersModel)