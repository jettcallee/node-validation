import { register } from "../../Services/Authentication.js";
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
    const product = await create(res, req.body);
    sendResponse(res, {
      statusCode: ADD,
      message: `Product ${CREATED}`,
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
      message: `Product ${CREATED}`,
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
