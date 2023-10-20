import express from "express"
import cors from "cors";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import http from "http";
import UserRoutes from "./Routes/UserRoutes";
import HostelRouter from "./Routes/HostelsRoutes";
import ReservationRoute from "./Routes/ReservationRoute";
import OfferRoutes from "./Routes/OfferRoutes";
import CommentRoutes from "./Routes/CommentRoutes";

const PORT = 3000;

const app = express();
http.createServer(app);
app.use(bodyParser.json());
app.use(cors({ origin: "*" }));

mongoose
    .connect("mongodb://127.0.0.1:27017/ReservationDB")
    .then(() => {
        console.log("database connected");
    })
    .catch((err) => {
        console.log(err);
    });

app.use("/users", UserRoutes);
app.use("/hostel", HostelRouter);
app.use("/reservation", ReservationRoute)
app.use("/offers",OfferRoutes)
app.use("/comments", CommentRoutes)

app.listen(PORT, () => {
    console.log(`app live on port ${PORT}`);
});
