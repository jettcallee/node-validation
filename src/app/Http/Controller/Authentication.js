import { register, login } from "../../Services/Authentication.js";
import {
  CREATED,
  DATA_FETCH,
  UPDATED,
  DELETED,
} from "../../Helpers/Message.js";
import { sendResponse } from "../../Helpers/Response.js";
import { OK, ADD } from "../../Helpers/StatusCode.js";

export const signIn = async (req, res, next) => {
  try {
    const product = await login(res, req.body);
    sendResponse(res, {
      statusCode: ADD,
      message: "login successfully",
      data: product,
    });
  } catch (error) {
    sendResponse(res, {
      success: false,
      statusCode: 500,
      error: error.message,
    });
  }
};

export const signUp = async (req, res, next) => {
  try {
    const product = await register(res, req.body);
    sendResponse(res, {
      statusCode: ADD,
      message: "user registered",
      data: product,
    });
  } catch (error) {
    sendResponse(res, {
      success: false,
      statusCode: 500,
      error: error.message,
    });
  }
};
