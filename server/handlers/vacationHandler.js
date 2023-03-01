const Vacation = require('../models/VacationModel')
const cloudinary = require("cloudinary").v2;

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});
const getVacationSpots = async (req,res) => {
    try {
        const vacation = await Vacation.find();
        return res.status(200).json(vacation);
      } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Failed to retrieve vacations" });
      }
}

const addVacations = async (req,res) => {
   const {name,location,description,photo,userName,userProfile} = req.body

   if (!name || !location || !description || !photo) {
    return res
      .status(400)
      .json({ message: "Please provide all required fields" });
  }

  let photoUrl;
  try {
    const image = req.file;
    const result = await cloudinary.uploader.upload(photo);
    photoUrl = result.secure_url;
  } catch (error) {
    console.error(error);
    return res.status(400).json({ message: "Failed to upload profile image" });
  }

  const vac = await Vacation.create({
    name,
    location,
    description,
    photo:photoUrl,
    userName,
    userProfile
  })

  if(vac){
    return res.status(201).json(vac)
  }else{
    return res.status(400).json({message:"an error ocured"})
  }
}

const updateVactionInfo = async (req, res) => {
    const vacId = req.params.id;
    const updatedInfo = req.body;
  
    const upvacInfo = await Vacation.findByIdAndUpdate(vacId, updatedInfo, {
      new: true,
    });
  
    if (!upvacInfo ) {
      return res.status(404).json({ message: "Vacation not found" });
    }
  
    res.status(200).json(upvacInfo );
  };

  const deleteVacation = async (req,res) => {
    const VacationId = req.params.id;
  
    const vac = await Vacation.findByIdAndDelete(VacationId);
  
    if (!vac) {
      return res.status(404).json({ message: "vacation   not found" });
    }
  
    res.status(200).json({ message: "vacation  deleted successfully" });
  }

  module.exports = {
    getVacationSpots,
    addVacations,
    updateVactionInfo,
    deleteVacation
  }