import mongoose from "mongoose";

// console.log(`${process.env.DB_URI}${process.env.DB_NAME}`);
// mongoose.connect(
//   `${process.env.DB_URI}${process.env.DB_NAME}` ||
//     "mongodb://127.0.0.1:27017/node_interview",
//   {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   },
//   (err) => {
//     if (err) {
//       console.log("err");
//       console.log(err);
//     } else {
//       console.log("Connected to MongoDB");
//     }
//   }
// );

mongoose
  .connect(
    `${process.env.DB_URI}${process.env.DB_NAME}` ||
      "mongodb://127.0.0.1:27017/node_interview",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

// mongoose.Promise = global.Promise;

// mongoose
//   .connect(
//     `${process.env.DB_URI}${process.env.DB_NAME}` ||
//       "mongodb://127.0.0.1:27017/node_interview",
//     {
//       useNewUrlParser: true,
//     }
//   )
//   .then(() => {
//     console.log("Databse Connected Successfully!!");
//   })
//   .catch((err) => {
//     console.log("Could not connect to the database", err);
//     process.exit();
//   });
