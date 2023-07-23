import { SOMETHING_WENT_WRONG } from "./Message.js";

export const sendResponse = (
  res,
  {
    success = true,
    statusCode = 200,
    message = SOMETHING_WENT_WRONG,
    data = null,
    error = null,
  }
) => {
  console.log("error");
  console.log(error);
  return res.status(statusCode).json({
    success,
    statusCode,
    message,
    data,
    error,
  });
};
