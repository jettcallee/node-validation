import { Router } from "express";
import productRoute from "./Product/index.js";
import authRoute from "./Auth/index.js";
import Authenticate from "../../app/Http/Middleware/Authenticate.js";
const adminRoutes = Router();

adminRoutes.use(authRoute);
adminRoutes.use("/product", Authenticate, productRoute);

export default adminRoutes;
