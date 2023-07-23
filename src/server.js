import "dotenv/config";
import "./config/db.js";
import Routes from "./routes/index.js";
import express, { json } from "express";

const app = express();
app.use(json());

const PORT = process.env.PORT || 8080;
app.use(Routes);
console.log("import.meta.url");
console.log(import.meta.url);
app.listen(PORT, () => console.log(`App listening at port ${PORT}`));
