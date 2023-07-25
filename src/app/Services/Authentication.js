import User from "../Models/User.js";
import { sendResponse } from "../Helpers/Response.js";
import { INTERNAL_SERVER_ERROR } from "../Helpers/StatusCode.js";
import { signToken } from "../../config/jwt/index.js";
import bcrypt from "bcrypt";

export const register = async (res, data) => {
  try {
    // Get user input
    const { first_name, last_name, email, password } = data;
    const encryptedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      first_name,
      last_name,
      email: email.toLowerCase(), // sanitize: convert email to lowercase
      password: encryptedPassword,
    });

    // Create token
    const token = await signToken({ user_id: user._id, email });
    return { user, token };
  } catch (e) {
    sendResponse(res, {
      success: false,
      statusCode: INTERNAL_SERVER_ERROR,
      error: e.message,
    });
  }
};

export const login = async (res, data) => {
  try {
    const { email, password } = data;
    const user = await User.findOne({ email });
    if (user && (await bcrypt.compare(password, user.password))) {
      const token = await signToken({ user_id: user._id, email });
      return { user, token };
    }
    sendResponse(res, {
      success: false,
      statusCode: 400,
      error: "Invalid Credentials",
    });
  } catch (e) {
    sendResponse(res, {
      success: false,
      statusCode: INTERNAL_SERVER_ERROR,
      error: e.message,
    });
  }
};
