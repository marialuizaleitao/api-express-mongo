import mongoose from "mongoose";

const bookSchema = new mongoose.Schema(
  {
    id: { type: mongoose.Schema.Types.ObjectId },
    title: { type: String, required: true },
    price: { type: Number },
    author: { type: String },
  },
  { versionKey: false }
);

const book = mongoose.model("books", bookSchema);

export default book;
