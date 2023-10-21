import ReservationModel from "../Models/ReservationModel";
import { Response, Request } from "express";
export const PutReservation = async (req: Request, res: Response) => {
  let { body } = req;
  try {
    const PutRes = await ReservationModel.create(body);
    if (!PutRes) {
      return res.json({ message: "error" });
    }
    return res.json({ message: "sucess", object: PutRes });
  } catch (error: any) {
    return res.json(error.message);
  }
};
export const getReservation = async (req: Request, res: Response) => {
  let { headers } = req;
  let { id } = headers;
  let filter = { _id: id };
  try {
    const getReserv = await ReservationModel.findOne(filter);
    if (!getReserv) {
      return res.json({ message: "error" });
    }
    return res.json({ message: "sucess", object: getReserv });
  } catch (error: any) {
    return res.json(error.message);
  }
};
// need to have idreservation in headers to make it work
export const EditResevation = async (req: Request, res: Response) => {
  let { headers, body } = req;
  let { idreservation } = headers;
  try {
    const UpdateHostel = await ReservationModel.findOneAndUpdate(
      { _id: idreservation },
      body
    );
    if (!UpdateHostel) {
      return res.json({ message: "error" });
    }
    return res.json({ message: "editted", UpdateHostel });
  } catch (error) {
    return res.json({ message: "error" });
  }
};
// need to have idreservation in headers to make it work
export const Delete = async (req: Request, res: Response) => {
  let { headers } = req;
  let { idreservation } = headers;
  try {
    const DeleteReservation = await ReservationModel.findOneAndDelete({
      _id: idreservation,
    });
    if (!DeleteReservation) {
      return res.json({ messgae: "error" });
    }
    return res.json({ message: "deleted" });
  } catch (error: any) {
    return res.json(error.message);
  }
};
export const getAllReservation = async (req: Request, res: Response) => {
  try {
    const getAll = await ReservationModel.find();
    if (!getAll) {
      return res.json({ message: "error" });
    }
    return res.json({ message: "sucess", object: getAll });
  } catch (error: any) {
    return res.json(error.message);
  }
};
