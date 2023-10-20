import { Request, Response } from "express";
import CommentModels from "../Models/CommentModels";

export const getComments = async (req: Request, Res: Response) => {
  try {
    const Comments = await CommentModels.find();
    if (!Comments || Comments.length == 0) {
      return Res.json({ message: "no comments" });
    }
    return Res.status(200).json({ message: "comment has been added", Object: Comments });
  } catch (error) {
    return Res.status(500).json({ error: "Internal Server Error" });
  }
};

export const addComment = async (req: Request, Res: Response) => {
    const { body } = req;
    try {
        const addComment = await CommentModels.create(body);
        if (!addComment) {
            return Res.json({message: "the comment has not been added"})
        }
        return Res.status(200).json({message: "comment has been added", Object: addComment})
    } catch (error) {
        return Res.status(500).json({ error: "Internal Server Error" });
    }
}
