import {
  getAll,
  add,
  getUnique,
  edit,
  Delete,
} from "../Controllers/HostelsControllers";
import express from "express";

const HostelRouter = express.Router();
HostelRouter.get("/", getAll);
HostelRouter.get("/detail", getUnique);
HostelRouter.post("/add", add);
HostelRouter.post("/edit", edit);
HostelRouter.get("/delete", Delete);
export default HostelRouter;
