import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";
export const BlogPostSchema = new mongoose.Schema({
  permaLink: {
    type: String,
    require: true,
    unique: true,
  },
  title: {
    type: String,
    required: true,
    minlength: [1, "Title must be at least 8 characters long"],
    maxlength: [128, "Title must be less than 128 characters long"],
  },
  content: {
    type: String,
    required: true,
    minlength: [1, "Content must be at least 1 characters long"],
    maxlength: [2000, "Content must be less than 2000 characters long"],
  },
  author: {
    type: String,
    required: true,
    minlength: [1, "Author must be at least 8 characters long"],
    maxlength: [128, "Author must be less than 128 characters long"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
}).plugin(mongoosePaginate);
