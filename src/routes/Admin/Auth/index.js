import { Router } from "express";
import { signIn, signUp } from "../../../app/Http/Controller/Authentication.js";
import { checkValidation } from "../../../app/Http/Middleware/Validation.js";

const authRoute = Router();

authRoute
  .post("/signin", checkValidation("signIn"), signIn)
  .post("/signup", checkValidation("signUp"), signUp);

export default authRoute;
