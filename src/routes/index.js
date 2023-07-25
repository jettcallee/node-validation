import { Router } from "express";
import adminRoutes from "./Admin/index.js";

const Routes = Router();

Routes.use("/admin", adminRoutes);

export default Routes;
