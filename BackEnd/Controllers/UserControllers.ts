import { Response, Request } from "express";
import UserModel from "../Models/UserModel";

export const getUsers = async (Request: Request, Res: Response) => {
  const allUsers = await UserModel.find();
  if (!allUsers || allUsers.length == 0) {
    return Res.json("No users in the database");
  }
  return Res.status(200).json(allUsers)
};

export const register = async (Request: Request, Res: Response) => {
    const  { body } = Request;
    try {
        const register = await UserModel.create(body)
        if (!register) {
            return Res.status(400).json("user not registered")
        }
        return Res.status(200).json({message: "user registered", user: register})
    } catch (error) {
        console.log("🚀 ~ file: UsersControllers.ts:13 ~ register ~ error:", error);
    }
}
