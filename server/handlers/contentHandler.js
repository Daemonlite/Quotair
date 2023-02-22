const Content = require('../models/contentModel')
const User = require('../models/userModel')


const getContents = async (req,res) => {
    try {
        const posts = await Content.find();
        return res.status(200).json(posts);
      } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Failed to retrieve posts" });
      }
}

const createPost = async (req,res) => {

 const {title,body,image1,image2,category,user} = req.body

  if(!title || !body){
    return res.status(400).json({message:"please add all fields"})
  }

  const post = await Content.create({
    title,
    body,
    image1,
    image2,
    category,
    user
  })

  if(post){
    res.status(201).json(post)
  }else{
    res.status(400).json({message:'an error ocurred'})
  }

}
const updatePost= async (req, res) => {
    const contentId = req.params.id;
    const updatedContent = req.body;
  
    const upcontent = await Content.findByIdAndUpdate(contentId, updatedContent, {
      new: true,
    });
  
    if (!upcontent) {
      return res.status(404).json({ message: "Post not found" });
    }
  
    res.status(200).json(upcontent);
  };

const deleteContent = async (req, res) => {
    const contentId = req.params.id;
  
    const post = await Content.findByIdAndDelete(contentId);
  
    if (!post) {
      return res.status(404).json({ message: "post not found" });
    }
  
    res.status(200).json({ message: "post deleted successfully" });
  };

module.exports = {
    getContents,
    createPost,
    updatePost,
    deleteContent
}