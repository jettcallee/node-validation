import { dirname } from "path";
import { fileURLToPath } from "url";
import { existsSync } from "fs";
import path from "path";

export default function getDirAndFileName({ url }) {
  const __filename = fileURLToPath(url);
  const __dirname = dirname(__filename);
  return { __filename, __dirname };
}

export function getAppRootDir(currentDir) {
  while (!existsSync(path.join(currentDir, "server.js"))) {
    currentDir = path.join(currentDir, "..");
  }
  return currentDir;
}
