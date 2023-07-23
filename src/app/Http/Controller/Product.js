import {
  create,
  find,
  findById,
  deleteById,
  updateById,
  uploadDataToCSV,
} from "../../Services/Product.js";
import {
  CREATED,
  DATA_FETCH,
  UPDATED,
  DELETED,
  UPLOAD,
} from "../../Helpers/Message.js";
import { sendResponse } from "../../Helpers/Response.js";
import { OK, ADD } from "../../Helpers/StatusCode.js";

export const add = async (req, res, next) => {
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

export const findAll = async (req, res, next) => {
  try {
    const products = await find();
    sendResponse(res, { message: DATA_FETCH, data: products });
  } catch (error) {
    sendResponse(res, {
      success: false,
      statusCode: 500,
      error: error.message,
    });
  }
};

export const findOne = async (req, res, next) => {
  try {
    const product = await findById(req.params.id);
    sendResponse(res, { message: DATA_FETCH, data: product });
  } catch (error) {
    sendResponse(res, {
      success: false,
      statusCode: 500,
      error: error.message,
    });
  }
};

export const update = async (req, res, next) => {
  try {
    const product = await updateById(req.params.id, req.body);
    sendResponse(res, { message: `Product ${UPDATED}`, data: product });
    s;
  } catch (error) {
    sendResponse(res, {
      success: false,
      statusCode: 500,
      error: error.message,
    });
  }
};

export const destroy = async (req, res, next) => {
  try {
    const product = await deleteById(req.params.id);
    sendResponse(res, { message: `Product ${DELETED}`, data: product });
  } catch (error) {
    sendResponse(res, {
      success: false,
      statusCode: 500,
      error: error.message,
    });
  }
};

export const addDataToCSV = async (req, res, next) => {
  try {
    if (!req.file)
      return sendResponse(res, {
        success: false,
        statusCode: 400,
        message: "Please Upload File.",
      });

    const products = await uploadDataToCSV(req.file.path, res);
    sendResponse(res, { message: `Products ${UPLOAD}`, data: products });
  } catch (error) {
    sendResponse(res, {
      success: false,
      statusCode: 500,
      error: error.message,
    });
  }
};
