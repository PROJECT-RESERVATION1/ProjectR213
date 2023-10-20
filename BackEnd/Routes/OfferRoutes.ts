import express  from "express";
import { addOffer, editOffer, getOffers } from "../Controllers/OffersControllers";

const OfferRoutes = express.Router();

OfferRoutes.get("/", getOffers)
OfferRoutes.post("/addOffer", addOffer)
OfferRoutes.post("/editOffer", editOffer)

export default OfferRoutes;