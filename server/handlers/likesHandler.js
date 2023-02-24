const Like = require('../models/likesModel')
const Content = require('../models/contentModel')

const getLikes = async (req,res) => {
    try {
        const like= await Like.find();
        return res.status(200).json(like);
      } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Failed to retrieve likes" });
      }
}
const like = async (req,res) => {
    const {user,post} = req.body

    if(!user || !post ){
      return  res.status(400).json({message:"could not like post"})
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

    const liked = new Like({
        post,
        user
    })

    try {
        await liked.save();
        existingPost.likes.unshift(liked);
        await existingPost.save();
      } catch (error) {
        console.log(error);
        res.status(400).json({ error: error });
      }
      return res.status(201).json(liked);

}

const unlike = async (req,res) => {
    const id = req.params.id;

    let like;
    try {
      like = await Like.findOne({ _id: id });
      if (!like) {
        return res
          .status(404)
          .json({ message: "The specified like was not found." });
      }
      await like.deleteOne({ _id: id });
      await Content.updateOne(
        { _id: like.post },
        { $pull: { likes: { _id: like._id } } }
      );
    } catch (err) {
      return res.status(500).json({
        message:
          " An internal server error has occurred.",
      });
    }
    return res
      .status(200)
      .json({ message: "unliked." });
}

module.exports = {
    getLikes,
    like,
    unlike
}