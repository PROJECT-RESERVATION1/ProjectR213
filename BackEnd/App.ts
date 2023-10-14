import express from "express"
import cors from "cors";
import mongoose from "mongoose";
import http from "http";
import UserRoutes from "./Routes/UserRoutes";

const PORT = 3000;

const app = express();
http.createServer(app);
// app.use(bodyParser.json());
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

app.listen(PORT, () => {
    console.log(`app live on port ${PORT}`);
});
