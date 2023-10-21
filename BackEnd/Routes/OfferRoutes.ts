import express  from "express";
import { addOffer, deleteOffer, editOffer, getOffers } from "../Controllers/OffersControllers";

const OfferRoutes = express.Router();

OfferRoutes.get("/", getOffers)
OfferRoutes.post("/addOffer", addOffer)
OfferRoutes.post("/editOffer", editOffer)
OfferRoutes.get("/delete/:id", deleteOffer)

export default OfferRoutes;