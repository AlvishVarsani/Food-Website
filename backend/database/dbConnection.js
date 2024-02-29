import mongoose from "mongoose";
// const dotenv = require("dotenv");
import dotenv from 'dotenv'

dotenv.config({path:"./config/config.env"});
mongoose
  .connect(process.env.MONGO_URI, {
    dbName: "RESERVATIONS"
  })
  .then(() => {
    console.log("Connected to database!");
  })
  .catch((err) => {
    console.log(`Some error occured while connecing to database: ${err}`);
  }); 