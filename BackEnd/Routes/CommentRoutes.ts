import express  from "express";
import { addComment, deleteComment, editComment, getComments } from "../Controllers/CommentControllers";

const CommentRoutes = express.Router();

CommentRoutes.get("/", getComments)
CommentRoutes.post("/addComment", addComment)
CommentRoutes.post("/change", editComment)
CommentRoutes.get("/delete/:id", deleteComment)

export default CommentRoutes;