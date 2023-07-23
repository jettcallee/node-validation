import { readFileSync } from "fs";
import path from "path";
import jwt from "jsonwebtoken";
import getDirAndFileName from "../../app/Helpers/GetDirAndFileName.js";

const { __dirname } = getDirAndFileName(import.meta);

const privateKey = readFileSync(path.join(__dirname, "private.key"), "utf8");
const publicKey = readFileSync(path.join(__dirname, "public.key"), "utf8");

export const signToken = (payload) => {
  try {
    return jwt.sign(payload, privateKey, { algorithm: "RS256" });
  } catch (err) {
    throw err;
  }
};

export const verifyToken = (token) => {
  try {
    return jwt.verify(token, publicKey, { algorithm: "RS256" });
  } catch (err) {
    throw err;
  }
};
