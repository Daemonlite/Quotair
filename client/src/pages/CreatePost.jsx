import React from 'react'
import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
const CreatePost = () => {
    const  navigate = useNavigate()
    const [image,setImage] = useState("")
    const [body,setBody] = useState("") 

    const user = JSON.parse(localStorage.getItem("userInfo"))
    const handleSubmit= (e) => {
     e.preventDefault()
     axios.post('http://localhost:9000/api/posts',{
        body,
        image1:image,
       userName:user.fullName,
       userProfile:user.profile,
       isVerified:user.isVerified,
        user:user._id
     })
     .then((res) => {
        console.log(res.data);
        toast.success("succesfully created");
        if (res.data) {
          navigate("/home");
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
<div  className='login' >
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
            label="description"
            variant="outlined"
            className="text"
            onChange={(e)=>setBody(e.target.value)}
          />
          <label htmlFor="post">Add a Photo</label>
          <TextField
            id="outlined-basic"
            type="file"
            variant="outlined"
            className="text"
            onChange={handleFileChange}
          />
          <Button type="submit" variant="contained">
         Post
          </Button>
         
        </Box>
      </div>
    </div>
  )
}

export default CreatePost