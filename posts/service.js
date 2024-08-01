import { postModel } from "./model.js";

const options = {
  sort: { createdAt: -1 },
};

const createPost = async (postToSave) => {
  const response = await postModel.create(postToSave);
  return { response };
};

const getAllPost = async (limit, page) => {
  const response = await postModel.paginate({}, { limit, page, ...options });

  return response;
};

const getPostById = async (id) => {
  const response = await postModel.findOne({ permaLink: id });
  return response;
};

const updatePost = async (filterPost, updatePost) => {
  const response = await postModel.findOneAndUpdate(filterPost, updatePost, {
    new: true,
  });
  return response;
};

const deletePost = async (filter) => {
  const response = await postModel.findOneAndDelete(filter);

  return response;
};

export { createPost, getAllPost, getPostById, updatePost, deletePost };
