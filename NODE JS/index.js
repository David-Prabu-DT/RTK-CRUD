const express = require("express");
const index = express();
const jwtRouter = require("./Routes/routes");
const cors = require("cors");

const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
  optionSuccessStatus: 200,
};

index.use(cors(corsOptions));
index.use(express.json());
index.use("/auth", jwtRouter);

module.exports = index;
