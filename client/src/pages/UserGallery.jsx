import {useState,useEffect} from 'react'
import axios from 'axios';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Link, CardActionArea, CardActions } from '@mui/material';

const UserGallery = () => {
    const user = JSON.parse(localStorage.getItem("userInfo"));
    const [post, setPost] = useState([]);
    useEffect(() => {
        axios
          .get("http://localhost:9000/api/posts")
          .then((res) => setPost(res.data))
          .catch((err) => console.log(err));
      }, []);
      const filteredPost = post.filter((posts)=>posts.user === user._id)
  return (
    <div className='position' style={{display:'flex',gap:'20px',justifyContent:"center",flexWrap:'wrap'}}>
    {filteredPost.map((res)=>
    <div className='id' key={res._id}>
<Card sx={{ maxWidth: 500 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image={res.image1}
          alt="green iguana"
        />
      </CardActionArea>
      <CardActions>
        <a href={res.image1} color="primary" download>
        Download
        </a>
      </CardActions>
    </Card>
    </div>
    )}
    </div>
  )
}

export default UserGallery