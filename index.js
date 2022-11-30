// require("dotenv").config();
import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";

dotenv.config();

const getKeys = () => {
  return {
    apiKey: process.env.API_KEY,
  };
};

const { apiKey: clientId } = getKeys();
// console.log("Hello CodeSandbox ...... " + process.env.API_KEY);
console.log("Hello CodeSandbox ...... " + clientId);

const app = express();
app.set("view engine", "ejs");

app.use(cors());

app.get("/", (req, res) => {
  //   res.json({ message: `hello world ${process.env.API_KEY}` });
  res.render("home", { key: "7890" });
});

app.get("/json", (req, res) => {
  res.json({ key: process.env.API_KEY });
});

app.listen(5001, () => {
  console.log("server running on port 5001");
});
