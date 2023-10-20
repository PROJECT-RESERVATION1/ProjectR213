import { Request, Response } from "express";
import OffersModel from "../Models/OffersModel";
import { headersType } from "./UserControllers";
import JWT from "jsonwebtoken";

export const getOffers = async (Request: Request, Res: Response) => {
  try {
    const getOffers = await OffersModel.find();
    if (!getOffers || getOffers.length == 0) {
      return Res.json({ message: "No offers in the database" });
    }
    return Res.status(200).json(getOffers);
  } catch (error) {
    return Res.status(500).json({ error: "Internal Server Error" });
  }
};

export const addOffer = async (req: Request, res: Response) => {
  const { body } = req;

  try {
    const addOffer = await OffersModel.create(body);
    if (!addOffer) {
      return res.json({ message: "the offer hasn't been added" });
    }
    return res.json({ message: "the offer has been added", object: addOffer });
  } catch (error: any) {
    return res.json(error.message);
  }
};

export const editOffer = async (req: Request, res: Response) => {
  const { body, headers: hd } = req;
  const headers: headersType = hd;
  const { id } = headers;

  try {
    const filter = { _id: id };
    const update = await OffersModel.findOneAndUpdate(filter, body);
    if (!update) {
      return res.status(404).json("No offer found");
    }
    return res.json({ message: "the offer has been updated", object: addOffer });
  } catch (error: any) {
    console.log("error during offer edit", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
