import multer from "multer";
import { Router } from "express";
import {
  add,
  findAll,
  findOne,
  destroy,
  update,
  addDataToCSV,
} from "../../../app/Http/Controller/Product.js";
import { productValidation } from "../../../app/Http/Middleware/Validation.js";
import { csvUploadPath } from "../../../app/Helpers/commonPath.js";

const productRoute = Router();
const upload = multer({ dest: csvUploadPath });

productRoute
  .get("/", findAll)
  .post("/", productValidation, add)
  .get("/:id", findOne)
  // .put("/product/:id", add)
  .patch("/:id", productValidation, update)
  .delete("/:id", destroy)
  .post("/upload", upload.single("file"), addDataToCSV);

export default productRoute;
