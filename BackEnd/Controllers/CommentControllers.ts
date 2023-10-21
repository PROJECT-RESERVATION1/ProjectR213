import { Request, Response } from "express";
import CommentModels from "../Models/CommentModels";
import { headersType } from "./UserControllers";

export const getComments = async (req: Request, Res: Response) => {
  try {
    const Comments = await CommentModels.find();
    if (!Comments || Comments.length == 0) {
      return Res.json({ message: "no comments" });
    }
    return Res.status(200).json({
      message: "comment has been added",
      Object: Comments,
    });
  } catch (error) {
    return Res.status(500).json({ error: "Internal Server Error" });
  }
};

export const addComment = async (req: Request, Res: Response) => {
  const { body } = req;
  try {
    const addComment = await CommentModels.create(body);
    if (!addComment) {
      return Res.json({ message: "the comment has not been added" });
    }
    return Res.status(200).json({
      message: "comment has been added",
      Object: addComment,
    });
  } catch (error) {
    return Res.status(500).json({ error: "Internal Server Error" });
  }
};

export const editComment = async (req: Request, res: Response) => {
  const { body, headers: hd } = req;
  const headers: headersType = hd;
  const { id } = headers;

  try {
    const filter = { _id: id };
    const updatedComment = await CommentModels.findOneAndUpdate(filter, body);
    if (!updatedComment) {
      return res.status(400).json("No comments found");
    }
    return res
      .status(200)
      .json({ message: "comment updated", Object: updatedComment });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const deleteComment = async (req: Request, res: Response) => {
    const { params, headers: hd } = req;
    const headers: headersType = hd;
    const { id } = params;
    const { userid } = headers; 

    const filter = { _id: id };

    try {
        const commentToDelete = await CommentModels.findOne(filter);     

        if (!commentToDelete) {
            return res.json("No comment found");
        }
        if (commentToDelete.userID != userid) {
            return res.json("This comment was not made by this user, can't delete it");
        }

        const commentDelete = await CommentModels.findOneAndDelete(filter); 
        if (!commentDelete) {
            return res.json("Comment not deleted");
        }

        return res.status(200).json("Comment deleted");
    } catch (error) {
        console.log("🚀 ~ file: ~ error:", error);
    }
}
