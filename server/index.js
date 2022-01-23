import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { OK, INTERNAL_SERVER_ERROR } from "./statusCode.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3050;
app.use(
  cors({
    origin: "*"
  })
);
app.use(express.json());

/* eslint-disable no-unused-vars */
const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode !== OK ? res.statusCode : INTERNAL_SERVER_ERROR;
  res.status(statusCode);
  res.send({
    message: err.message
  });
  next();
};

app.get("/", (req, res, next) => {
  res.send({
    message: "Hello Friend!"
  });
  next();
});

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is listening PORT:${PORT} `);
});
