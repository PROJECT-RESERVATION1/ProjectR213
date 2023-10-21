import express from "express";
import { editPassword, getUsers, login, register } from "../Controllers/UserControllers";

const UserRoutes = express.Router();

UserRoutes.get("/", getUsers);
UserRoutes.post("/login", login);
UserRoutes.post("/register", register);
UserRoutes.post("/editPassword/", editPassword);
// UserRoutes.get("/delete/:id", deleteUser);
export default UserRoutes;