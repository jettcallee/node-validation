import csv from "csvtojson";
import Product from "../Models/Product.js";
import { sendResponse } from "../Helpers/Response.js";
import { INTERNAL_SERVER_ERROR } from "../Helpers/StatusCode.js";
import { csvUploadPath } from "../Helpers/commonPath.js";
import CSVFileValidator from "csv-file-validator";
import { readFileSync } from "fs";
import path from "path";

export const find = async () => {
  try {
    return await Product.find();
  } catch (e) {
    sendResponse(res, {
      success: false,
      statusCode: INTERNAL_SERVER_ERROR,
      error: e.message,
    });
  }
};

export const findById = async (id) => {
  try {
    return await Product.findById(id);
  } catch (e) {
    sendResponse(res, {
      success: false,
      statusCode: INTERNAL_SERVER_ERROR,
      error: e.message,
    });
  }
};

export const create = async (res, data) => {
  try {
    return await Product.create(data);
  } catch (error) {
    sendResponse(res, {
      success: false,
      statusCode: INTERNAL_SERVER_ERROR,
      error: error.message,
    });
  }
};

export const updateById = async (id, data) => {
  try {
    return await Product.findByIdAndUpdate(id, data, { new: true });
    // const dataa = await Product.findByIdAndUpdate(
    //   id,
    //   {
    //     $set: data,
    //   },
    //   { new: true }
    // );
  } catch (e) {
    sendResponse(res, {
      success: false,
      statusCode: INTERNAL_SERVER_ERROR,
      error: e.message,
    });
  }
};

export const deleteById = async (id) => {
  try {
    return await Product.findByIdAndDelete(id);
  } catch (e) {
    sendResponse(res, {
      success: false,
      statusCode: INTERNAL_SERVER_ERROR,
      error: e.message,
    });
  }
};

export const uploadDataToCSV = async (file, res) => {
  try {
    const file_data = await readFileSync(file, "utf8");
    const config = {
      headers: [
        {
          name: "id",
          inputName: "id",
          required: true,
          requiredError: function (headerName, rowNumber, columnNumber) {
            return `${headerName} is required in the ${rowNumber} row / ${columnNumber} column`;
          },
        },
        {
          name: "title",
          inputName: "title",
          required: true,
          requiredError: function (headerName, rowNumber, columnNumber) {
            return `${headerName} is required in the ${rowNumber} row / ${columnNumber} column`;
          },
        },
        {
          name: "description",
          inputName: "description",
          required: true,
          requiredError: function (headerName, rowNumber, columnNumber) {
            return `${headerName} is required in the ${rowNumber} row / ${columnNumber} column`;
          },
        },
        {
          name: "price",
          inputName: "price",
          required: true,
          requiredError: function (headerName, rowNumber, columnNumber) {
            return `${headerName} is required in the ${rowNumber} row / ${columnNumber} column`;
          },
        },
        {
          name: "discountPercentage",
          inputName: "discountPercentage",
          required: true,
          requiredError: function (headerName, rowNumber, columnNumber) {
            return `${headerName} is required in the ${rowNumber} row / ${columnNumber} column`;
          },
        },
        {
          name: "rating",
          inputName: "rating",
          required: true,
          requiredError: function (headerName, rowNumber, columnNumber) {
            return `${headerName} is required in the ${rowNumber} row / ${columnNumber} column`;
          },
        },
        {
          name: "stock",
          inputName: "stock",
          required: true,
          requiredError: function (headerName, rowNumber, columnNumber) {
            return `${headerName} is required in the ${rowNumber} row / ${columnNumber} column`;
          },
        },
        {
          name: "brand",
          inputName: "brand",
          required: true,
          requiredError: function (headerName, rowNumber, columnNumber) {
            return `${headerName} is required in the ${rowNumber} row / ${columnNumber} column`;
          },
        },
        {
          name: "category",
          inputName: "category",
          required: true,
          requiredError: function (headerName, rowNumber, columnNumber) {
            return `${headerName} is required in the ${rowNumber} row / ${columnNumber} column`;
          },
        },
        {
          name: "thumbnail",
          inputName: "thumbnail",
        },
        {
          name: "images/0",
          inputName: "images0",
        },
        {
          name: "images/1",
          inputName: "images0",
        },
        {
          name: "images/2",
          inputName: "images2",
        },
        {
          name: "images/3",
          inputName: "images3",
        },
        {
          name: "images/4",
          inputName: "images4",
        },
        {
          name: "images/5",
          inputName: "images5",
        },
      ],
    };
    const csvData = await CSVFileValidator(file_data, config);
    if (csvData.inValidData.length > 0) {
      sendResponse(res, {
        success: false,
        statusCode: INTERNAL_SERVER_ERROR,
        error: csvData.inValidData,
      });
    } else {
      csvData.data.forEach((object) => {
        delete object["id"];
      });

      const data = await Product.insertMany(csvData.data);
    }

    // .then((csvData) => {
    //   console.log("csvData");
    //   console.log(csvData.inValidData.length > 0); // Array of error messages
    //   if (csvData.inValidData.length > 0) {
    //     sendResponse(res, {
    //       success: false,
    //       statusCode: INTERNAL_SERVER_ERROR,
    //       error: e.message,
    //     });
    //   } else {
    //   }
    // })
    // .catch((err) => console.log(err));

    // if (csvData.inValidData.length > 0)
    // let products = [];
    // await csv()
    //   .fromFile(file)
    //   .then((jsonObj) => {
    //     console.log("jsonObj");
    //     console.log(jsonObj);
    //     let data = [];
    //     for (let i = 0; i < jsonObj.length; i++) {
    //       console.log("jsonObj[i]");
    //       console.log(jsonObj[i]["Name"]);
    //       if (!jsonObj[i]["last_name"]) {
    //         console.log(`on row ${i + 1}`);
    //       }
    //       let obj = {};
    //       obj.Name = jsonObj[i]["Name"];
    //       data.push(obj);
    //     }
    //     console.log("jsonObj");
    //     console.log(jsonObj);
    //     products = jsonObj;
    //   });
    // console.log(products);
    // return await Product.insertMany(products);
  } catch (e) {
    sendResponse(res, {
      success: false,
      statusCode: INTERNAL_SERVER_ERROR,
      error: e.message,
    });
  }
};
