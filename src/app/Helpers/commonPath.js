import path from "path";
import getDirAndFileName, {
  getAppRootDir,
} from "../Helpers/GetDirAndFileName.js";

const { __filename, __dirname } = getDirAndFileName(import.meta);
const rootPath = getAppRootDir(__dirname);
export const publicPath = path.join(rootPath, "public");
export const csvUploadPath = path.join(publicPath, "csvUploads");
