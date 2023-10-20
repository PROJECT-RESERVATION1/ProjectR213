import express  from "express";
import { addComment, getComments } from "../Controllers/CommentControllers";

const CommentRoutes = express.Router();

CommentRoutes.get("/", getComments)
CommentRoutes.post("/addComment", addComment)

export default CommentRoutes;