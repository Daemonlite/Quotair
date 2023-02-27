import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import  Typography  from "@mui/material/Typography";
import Link  from "@mui/material/Link";
import axios from 'axios'
import {toast} from 'react-toastify'
import {useNavigate} from 'react-router-dom'
import {useState} from 'react'
const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setpassword] = useState("")
    const navigate = useNavigate()
      const handleSubmit = (e) => {
        e.preventDefault();
        axios
          .post('http://localhost:9000/api/users/login/', {
            email,
            password,
          })
          .then((res) => {
    
            toast.success('login successful');
            if (res.data) {
              localStorage.setItem('userInfo', JSON.stringify(res.data));
              navigate('/home');
            }
            setpassword('');
            setEmail('');
          })
          .catch((err) => {
            toast.error(err.response.data);
          });
      }
  return (
    <div className="position">
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
            type="email"
            label="email"
            variant="outlined"
            className="text"
            onChange={(e)=>setEmail(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            type="password"
            label="password"
            variant="outlined"
            className="text"
            onChange={(e)=>setpassword(e.target.value)}
          />
          <Button type="submit" variant="contained">
            Submit
          </Button>
          <Typography variant='p' sx={{textAlign:"center"}}>
          Don't have an account ? <Link href='/register'>Register</Link>
          <br />
          forgot password ? <Link href='/register'>Reset</Link>
          </Typography>
        </Box>
      </div>
    </div>
  );
};

export default Login;
