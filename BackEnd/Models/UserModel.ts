import mongoose from "mongoose";

const UserModel = new mongoose.Schema ({
    nom:{
        type: String, 
        required: true
    },
    prenom:{
        type: String, 
        required: true
    }, 
    dateDeNaissance :{
        type: Date,
        required: true
    }, 
    email: {
        type: String,
        required: true, 
        lowercase: true,
        unique: true
    },    
    username: {
        type: String,
        required: true, 
        lowercase: true,
        unique: true
    },
    password: {
        type: String,
        required: true, 
    },
    createdAt: {
        type: Date, 
        default: ()=>{
            return new Date();
        }
    }, 
    isAdmin: {
        type: Boolean, 
        default: false
    },
    telephone: {
        type: String,
        required: true,
    },
    cards: {
        type: Array,
        required: true,
    } 
});

export default new (mongoose.model as any)("users", UserModel )