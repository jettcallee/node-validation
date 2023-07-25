import { sendResponse } from "../../Helpers/Response.js";
import { verifyToken } from "../../../config/jwt/index.js";

const Authenticate = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return sendResponse(res, {
      success: false,
      statusCode: 403,
      error: "A token is required for authentication",
    });
  }

  try {
    const decoded = verifyToken(token);
    req.user = decoded;
  } catch (err) {
    return sendResponse(res, {
      success: false,
      statusCode: 403,
      error: "Invalid Token",
    });
  }
  return next();
};

export default Authenticate;
