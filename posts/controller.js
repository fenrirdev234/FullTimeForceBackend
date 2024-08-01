import crypto from "crypto";
import {
  createPost,
  deletePost,
  getAllPost,
  getPostById,
  updatePost,
} from "./service.js";

const insertPost = async (req, res) => {
  const permaLink = crypto.randomBytes(16).toString("base64url");
  const postToSave = { ...req.body, permaLink };

  const createdPost = await createPost(postToSave);
  res.status(201).json({ post: createdPost });
};

const getPost = async (req, res) => {
  const limit = parseInt(req.query.limit, 10) || 10;
  const page = parseInt(req.query.page, 10) || 1;

  const post = await getAllPost(limit, page);

  res.status(200).json({ post });
};

const getSpecifyPost = async (req, res) => {
  const post = await getPostById(req.params.permalink);

  res.status(200).json({ post });
};

const modifyPost = async (req, res) => {
  const updatedAt = new Date();

  const postToUpdate = { ...req.body, updatedAt };
  const post = await updatePost(
    {
      permaLink: req.params.permalink,
    },
    postToUpdate
  );

  res.status(200).json({ post: post });
};

const eliminatePost = async (req, res) => {
  const deletedPost = await deletePost({
    permaLink: req.params.permalink,
  });

  res.status(200).json({ post: deletedPost });
};

export { insertPost, getPost, getSpecifyPost, modifyPost, eliminatePost };
