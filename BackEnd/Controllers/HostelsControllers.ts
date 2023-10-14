import {Request,Response} from 'express'
import HostelsModels from '../Models/HostelsModels'

export const getAll=async (req:Request,res:Response)=>{
    try {
        const getHostels= await HostelsModels.find()
        if(!getHostels||getHostels==0){
        return res.json({message:"there is problem with the API or the data base is empty"})
        } 
      return res.json({message:"your announecment was added",object:getHostels})
    } catch (error:any) {
        return res.json(error.message)
    }
}

export const add=async (req:Request,res:Response)=>{
    let{body}=req
    try {
        const newHostel= await HostelsModels.create(body)
        if(!newHostel){
            return res.json({message:"your announecment haven't been added"})
        }
        return res.json({message:"your annoncement have been added",object:newHostel})
    } catch (error:any) {
        return res.json(error.message)
    }
}