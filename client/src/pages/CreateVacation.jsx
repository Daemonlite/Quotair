import React from 'react'
import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const CreateVacation = () => {
    const  navigate = useNavigate()
    const [image,setImage] = useState("")
    const [name,setName] = useState("")
    const [location,setLocation] = useState("")
    const [description,setDescription] = useState("")


    const user = JSON.parse(localStorage.getItem("userInfo"))
    const handleSubmit= (e) => {
     e.preventDefault()
     axios.post('http://localhost:9000/api/vacations',{
        name,
        description,
        location,
        photo:image,
       userName:user.fullName,
       userProfile:user.profile,
  
     })
     .then((res) => {
        console.log(res.data);
        toast.success("succesfully created");
        if (res.data) {
          navigate("/vacations");
        }
    })
    .catch((err)=>{
        toast.error(err.response.data)
    })
    } 
    const handleFileChange = async (e) => {
        const file = e.target.files[0];
        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', 'oqvsv0i6'); 
    
        try {
          const res = await axios.post('https://api.cloudinary.com/v1_1/dkx1dythx/image/upload', formData);
          const imageUrl = res.data.secure_url;
          setImage(imageUrl);
        } catch (err) {
          console.log(err);
        }
      }
  return (
    <div className='position'>
    <br />
  <br />
<div  className='vac' >
  <br />
  <br />
    <Box
      component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "70%",
        gap: "15px",
        justifyContent: "center",
        margin: "0 auto",
        
      }}
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <TextField
        id="outlined-basic"
        type="text"
        label="Name of Vacation Spot"
        variant="outlined"
        className="text"
        onChange={(e)=>setName(e.target.value)}
      />
      <label htmlFor="post">Add a Photo</label>
      <TextField
        id="outlined-basic"
        type="file"
        variant="outlined"
        className="text"
        onChange={handleFileChange}
      />
            <TextField
        id="outlined-basic"
        type="text"
        label="description"
        variant="outlined"
        className="text"
        onChange={(e)=>setDescription(e.target.value)}
      />

<TextField
        id="outlined-basic"
        type="text"
        label="Location of vacation spot"
        variant="outlined"
        className="text"
        onChange={(e)=>setLocation(e.target.value)}
      />
      <Button type="submit" variant="contained">
     Post Vacation Spot
      </Button>
     
    </Box>
  </div>
</div>
  
  )
}

export default CreateVacation