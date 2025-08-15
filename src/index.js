import dotenv from "dotenv";
import express from "express";

dotenv.config({
  path: "./.env",
});

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/about", (req, res) => {
  res.send("about us");
});

app.listen(port, () => {
  console.log(`listening on port http://localhost:${port}`);
});
