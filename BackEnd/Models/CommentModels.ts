import mongoose, { mongo } from "mongoose";

const CommentModel = new mongoose.Schema({
    id:{
        type:String,
        required: true
    },
    comment: {
        type: String, 
        required: true
    },
    userID: {
        type: mongoose.Types.ObjectId,
        ref: "users",
        required: true
    }
})

export default new (mongoose.model as any)("comments", CommentModel)