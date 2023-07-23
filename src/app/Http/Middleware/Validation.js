import validator from "../../Helpers/Validate.js";
import { sendResponse } from "../../Helpers/Response.js";
//import Validator from "validatorjs";

export const productValidation = async (req, res, next) => {
  const validationRule = {
    title: "required|string|exist:Product,title",
    description: "required|string",
    price: "required",
    discountPercentage: "required",
    rating: "required",
    stock: "required",
    brand: "required",
    category: "required",
  };
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
