import { Response, Request } from "express";
import { IncomingHttpHeaders} from "http"
import UserModel from "../Models/UserModel";
import JWT from "jsonwebtoken";
import axios from "axios";
const bcrypt = require("bcrypt");
const saltRounds = 10;

export const getUsers = async (Request: Request, Res: Response) => {
  try {
    const allUsers = await UserModel.find({}, "nom prenom dateDeNaissance");
    if (!allUsers || allUsers.length == 0) {
      return Res.json("No users in the database");
    }
    return Res.status(200).json(allUsers);
  } catch (error) {
    return Res.status(500).json({ error: "Internal Server Error" });
  }
};

export const register = async (req: Request, res: Response) => {
  const { body } = req;
  const notHashedPassword = body.password;

  bcrypt.hash(
    notHashedPassword,
    saltRounds,
    async function (err: any, hash: any) {
      if (err) {
        console.error("Error hashing the password:", err);
        return res.status(500).json({ message: "Internal Server Error" });
      }
      console.log(hash);

      body.password = hash;

      try {
        const registeredUser = await UserModel.create(body);
        if (!registeredUser) {
          return res.status(400).json("User not registered");
        }
        return res.status(200).json({ message: "User registered" });
      } catch (error) {
        console.error("Error during registration:", error);
      }
    }
  );
};

export const login = async (req: Request, res: Response) => {
    const { body } = req;
    const { user, password } = body;

    try {
        const checkUser = await UserModel.findOne({
            $or: [{ username: user }, { email: user }],
        });

        if (!checkUser) {
            return res.status(400).json("User not found");
        }

        bcrypt.compare(password, checkUser.password, async function (err: any, passwordMatch: any) {
            if (err) {
                console.error("Error comparing passwords:", err);
                return res.status(500).json({ message: "Internal Server Error" });
            }

            if (!passwordMatch) {
                return res.json({ message: "Password not matching" });
            }

            const { _id } = checkUser;

            const token = JWT.sign({ id: _id }, "tokenencKey");

            return res.status(200).json({ message: "Log in successful", token });
        });
    } catch (error) {
        console.error("Error during login:", error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
};


export const editPassword = async (req: Request, res: Response) => {
    
    const { body, headers:hd } = req;
    const headers:headersType=hd
    const { token } = headers;
    const { oldPassword, newPassword } = body;
    



   
    
    try {
        const clearToken:any = JWT.verify(token!, "tokenencKey");
        const { id } = clearToken;
    const filter = { _id: id };

    
        const activeUser = await UserModel.findOne({ _id: id });
        if (!activeUser) {
            return res.status(404).json("No user found");
        }

        bcrypt.compare(oldPassword, activeUser.password, async function(err: any, passwordMatch: any) {
            if (err) {
                console.error("Error comparing passwords:", err);
                return res.status(500).json({ message: "Internal Server Error" });
            }

            if (!passwordMatch) {
                return res.json("Old password is incorrect");
            }

            bcrypt.hash(newPassword, saltRounds, async function(err: any, hash: any) {
                if (err) {
                    console.error("Error hashing the new password:", err);
                    return res.status(500).json({ message: "Internal Server Error" });
                }

                const update = await UserModel.findOneAndUpdate(filter, { password: hash });

                if (!update) {
                    return res.json("Password not updated");
                }


            });
        });
        return res.status(200).json("Password updated");
    } catch (error) {
        console.error("Error during password edit:", error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
};

export type headersType =  IncomingHttpHeaders &{
    token?:string
}