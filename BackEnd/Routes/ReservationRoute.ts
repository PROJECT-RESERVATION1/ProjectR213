import express from "express";
import {
  PutReservation,
  getAllReservation,
  getReservation,
  EditResevation,
  Delete,
} from "../Controllers/ReservationsControllers";
const ReservationRoute = express.Router();
ReservationRoute.get("/", getAllReservation);
ReservationRoute.get("/detail", getReservation);
ReservationRoute.post("/Edit", EditResevation);
ReservationRoute.post("/add", PutReservation);
ReservationRoute.get("/delete", Delete);
export default ReservationRoute;
