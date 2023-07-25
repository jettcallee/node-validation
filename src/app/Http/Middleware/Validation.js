import validator from "../../Helpers/Validate.js";
import { sendResponse } from "../../Helpers/Response.js";
//import Validator from "validatorjs";

export const checkValidation = (flag) => {
  return async (req, res, next) => {
    let validationRule = {};
    if (flag === "product") {
      validationRule = {
        title: "required|string|exist:Product,title",
        description: "required|string",
        price: "required",
        discountPercentage: "required",
        rating: "required",
        stock: "required",
        brand: "required",
        category: "required",
      };
    } else if (flag === "signIn") {
      validationRule = {
        email: "required",
        password: "required",
      };
    } else if (flag === "signUp") {
      validationRule = {
        first_name: "required|string",
        last_name: "required|string",
        email: "required",
        password: "required",
      };
    } else if (flag === "category") {
      validationRule = {
        first_name: "require",
        last_name: "require",
        email: "required",
        password: "required",
      };
    }

    validator(req.body, validationRule, {}, (err, status) => {
      if (!status) {
        sendResponse(res, {
          success: false,
          statusCode: 412,
          message: "Validation failed",
          error: err,
        });
      } else {
        next();
      }
    });
  };
};
