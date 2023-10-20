import { Request,Response } from "express" 
import Hostelsmodels from "../Models/Hostelsmodels"
export const getAll=async(req:Request,res:Response)=>{
try {
    const getHostels=await Hostelsmodels.find()
    if(!getHostels||getHostels.length==0){
        return res.json({message:"there is a probleme withe the Api or data base is empty"})
    }
    return res.json({message:"your announcement was add",Object:getHostels})
} catch (error:any) {
    return res.json(error.message)
}
}
export const add =async(req:Request,res:Response)=>{
    let{body}=req

try {
    const addHostel= await Hostelsmodels.create(body)
    if(!addHostel){
        return res.json({message:"the annoncement hasn't been added"})
    }
    return res.json({message:"the annoncement has been added",object:addHostel})
} catch (error:any) {
return res.json(error.message)
}
}
export const getUnique =async(req:Request,res:Response)=>{
    let {headers}=req;
    let{id}=headers 
    let filter={_id:id}
    try {
    const getHostel= await Hostelsmodels.findOne(filter)
    if(!getHostel){
        return res.json('hostelproblem')
    }
    return res.json({message:"sucess",object:getHostel})
    } catch (error:any) {
    return res.json(error.message)
    }
}