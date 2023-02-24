const Comment = require("../models/commentModel");
const Content = require("../models/contentModel");

const getComments = async (req, res) => {
  try {
    const comment = await Comment.find();
    return res.status(200).json(comment);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Failed to retrieve comments" });
  }
};

const addComment = async (req, res) => {
  const { userProfile, userName, content, post } = req.body;

  if (!content) {
    return res.status(400).json({ message: "please add comment" });
  }

  let existingPost;
  try {
    existingPost = await Content.findById(post);
  } catch (error) {
    console.log(error);
  }
  if (!existingPost) {
    return res.status(400).json({ message: "post not found" });
  }

  const comment = new Comment({
    userProfile,
    userName,
    content,
    post,
  });

  try {
    await comment.save();
    existingPost.comments.unshift(comment);
    await existingPost.save();
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error });
  }
  return res.status(201).json(comment);
};

const deleteComment = async (req, res) => {
  const id = req.params.id;

  let comment;
  try {
    comment = await Comment.findOne({ _id: id });
    if (!comment) {
      return res
        .status(404)
        .json({ message: "The specified comment was not found." });
    }
    await comment.deleteOne({ _id: id });
    await Content.updateOne(
      { _id: comment.post },
      { $pull: { comments: { _id: comment._id } } }
    );
  } catch (err) {
    return res.status(500).json({
      message:
        "Unable to delete the  comment. An internal server error has occurred.",
    });
  }
  return res
    .status(200)
    .json({ message: "Successfully deleted the  comment." });
};
module.exports = {
  getComments,
  addComment,
  deleteComment,
};
