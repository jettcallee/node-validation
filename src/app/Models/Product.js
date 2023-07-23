import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    discountPercentage: {
      type: String,
      required: true,
    },
    rating: {
      type: String,
      required: true,
    },
    stock: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
  },
  { timestamps: true, versionKey: false }
);

schema.statics = {
  async valueExists(query) {
    return await this.findOne(query).then((result) => result);
  },
};

export default mongoose.model("Product", schema);

// export default product;
