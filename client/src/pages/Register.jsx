import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Link  from "@mui/material/Link";
import  Typography  from "@mui/material/Typography";
import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios';
import { toast } from 'react-toastify';
const Register = () => {
    const [fullName, setFullName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setpassword] = useState("");
    const [profile, setProfile] = useState("");
    const navigate = useNavigate()

    const handleFileChange = async (e) => {
      const file = e.target.files[0];
      const formData = new FormData();
      formData.append('file', file);
      formData.append('upload_preset', 'oqvsv0i6'); 
  
      try {
        const res = await axios.post('https://api.cloudinary.com/v1_1/dkx1dythx/image/upload', formData);
        const imageUrl = res.data.secure_url;
        setProfile(imageUrl);
      } catch (err) {
        console.log(err);
      }
    }
    const handleSubmit = (e) => {
      e.preventDefault();
      axios
        .post('http://localhost:9000/api/users/register/', {
          fullName,
          username,
          email,
          password,
          profile,

        })
        .then((res) => {
  
          toast.success('Register successful');
          if (res.data) {
            localStorage.setItem('userInfo', JSON.stringify(res.data));
            navigate('/');
          }
          setpassword('');
          setEmail('');
        })
        .catch((err) => {
          toast.error(err.response.data);
        });
      }
  return (
    <div>
      <div className="position">
  
        <div action="" className="register">
            <br />
          <Box
            component="form"
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "90%",
              gap: "15px",
              justifyContent: "center",
              margin: "0 auto",
            }}
            autoComplete="off"
            onSubmit={handleSubmit}
          >
            <TextField
              id="outlined-basic"
              label="Full Name"
              variant="outlined"
              onChange={(e)=>setFullName(e.target.value)}
            />
            <TextField
              id="outlined-basic"
              label="Username"
              variant="outlined"
              onChange={(e)=>setUsername(e.target.value)}
            />
            <TextField
              id="outlined-basic"
              type="email"
              label="email"
              variant="outlined"
              onChange={(e)=>setEmail(e.target.value)}
            />
            <TextField
              id="outlined-basic"
              type="password"
              label="password"
              variant="outlined"
              onChange={(e)=>setpassword(e.target.value)}
            />
            <label htmlFor="profile">Choose profile photo</label>
            <TextField id="outlined-basic" type="file" variant="outlined" onChange={handleFileChange} />
            <Button type="submit" variant="contained">
              Submit
            </Button>
            <Typography variant='p' sx={{textAlign:"center"}}>
         Already have an account ? <Link href='/'>Login</Link>
          </Typography>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default Register;
