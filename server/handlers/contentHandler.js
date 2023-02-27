const Content = require('../models/contentModel')
const User = require('../models/userModel')
const cloudinary = require("cloudinary").v2;

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

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

 const {body,image1,image2,category,user,userName,userProfile,isVerified} = req.body

  if( !body){
    return res.status(400).json({message:"please add all fields"})
  }
  let profileImageUrl;
  try {
    const image = req.file;
    const result = await cloudinary.uploader.upload(image1);
    profileImageUrl = result.secure_url;
  } catch (error) {
    console.error(error);
    return res.status(400).json({ message: "Failed to upload profile image" });
  }

  const post = await Content.create({
    body,
    image1:profileImageUrl,
    image2,
    category,
    user,
    userName,
    userProfile,
    isVerified
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