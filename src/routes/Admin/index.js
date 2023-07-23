import { Router } from "express";
import productRoute from "./Product/index.js";
import authRoute from "./Auth/index.js";

const adminRoutes = Router();

adminRoutes.use(authRoute);
adminRoutes.use("/product", productRoute);

export default adminRoutes;
