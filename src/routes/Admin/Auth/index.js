import { Router } from "express";
import { signIn, signUp } from "../../../app/Http/Controller/Authentication.js";
import { productValidation } from "../../../app/Http/Middleware/Validation.js";

const authRoute = Router();

authRoute.post("/signin", signIn).post("/signup", signUp);

export default authRoute;
