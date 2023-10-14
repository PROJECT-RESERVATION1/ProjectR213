import express from "express";
import { getUsers, login, register } from "../Controllers/UserControllers";

const UserRoutes = express.Router();

UserRoutes.get("/", getUsers);
UserRoutes.post("/login", login);
UserRoutes.post("/register", register);
// UserRoutes.post("/edit/:id", editUSer);
// UserRoutes.get("/delete/:id", deleteUser);
export default UserRoutes;