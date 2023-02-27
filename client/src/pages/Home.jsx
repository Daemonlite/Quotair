import { useState,useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import IconButton from "@mui/material/IconButton";
import InsertPhotoOutlinedIcon from "@mui/icons-material/InsertPhotoOutlined";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import DateRangeOutlinedIcon from "@mui/icons-material/DateRangeOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
import {useNavigate} from 'react-router-dom'
import {toast} from 'react-toastify'
import axios from'axios'
const Home = () => {
  const [active, setActive] = useState(true);
  const [post,setPost] = useState([])
  const [content,setContent] = useState("")
  const navigate = useNavigate
  const user = JSON.parse(localStorage.getItem("userInfo"));

  if(!user){
    navigate('/')
  }

  useEffect(()=>{
    axios.get('http://localhost:9000/api/posts')
    .then((res)=>setPost(res.data))
    .catch((err)=>console.log(err))

   
  },[])


const addComment = (res) => {

  axios.post('http://localhost:9000/api/comments',{
    userName:user.FullName,
    userProfile:user.profile,
    post:res._id,
    content
  })
  .then((res)=>{
    console.log(res.data)
    toast.warn('liked')
  })
  .catch((err)=>{
    console.log(err)
    toast.error('cannot like twice')
  })
}


  return (
    <div className="position">
      <div className="post">
        <br />
        <div className="ava">
          <div className="avatar">
            <Avatar  src={user.profile}/>
          </div>
          <div className="input">
            <a
              href="/create_post"
              style={{ marginLeft: "10px", color: "darkgray" }}
            >
              Create post
            </a>
          </div>
        </div>
        <div className="icons">
          <div className="one">
            <InsertPhotoOutlinedIcon style={{ color: "blue" }} />
            Photo
          </div>
          <div className="two">
            <PlayCircleOutlineIcon style={{ color: "green" }} />
            video
          </div>
          <div className="three">
            <DateRangeOutlinedIcon style={{ color: "yellow" }} />
            Events
          </div>
          <div className="four">
            <ArticleOutlinedIcon style={{ color: "brown" }} />
            Article
          </div>
        </div>
        <br />
      </div>
      <br />
      {post.map((res)=> 
      <div className="key" key={res._id}>
        <Container maxWidth="sm">
      <Card sx={{ maxWidth: 600 }}>
        <CardContent>
          <div className="click" style={{ display: "flex", gap: "10px" }}>
            <Avatar
              alt="Eugene"
              src={res.userProfile}
            />{" "}
            <p
              style={{
                fontSize: "1rem",
                marginTop: "10px",
                fontWeight: "bold",
                color: "darkgray",
              }}
            >
                 {res.userName} {res.isVerified && <VerifiedOutlinedIcon/>}
            </p>
            <div className="follow">
            +Follow
            </div>
          </div>

          <Typography variant="body2" color="text.secondary">
            {res.body}
          </Typography>
        </CardContent>
        <CardMedia
          sx={{ height: 300 }}
          image={res.image1}
          title="green iguana"
          component="img"
        />

        <CardActions sx={{ display: "flex", justifyContent: "space-around" }}>
          <IconButton aria-label="add to favorites" >
            <FavoriteIcon onClick={()=> {
             axios.post('http://localhost:9000/api/reactions',{
              user:user._id,
              post:res._id
            })
            .then((res)=>{
              console.log(res.data)
              toast.warn('liked')
            })
            .catch((err)=>{
              console.log(err)
              toast.error('cannot like twice')
            })
          }} /> {res.likes.length}
          </IconButton>

          <IconButton aria-label="comment" >
            <ChatBubbleOutlineIcon  /> {res.comments.length}
          </IconButton>

          <IconButton aria-label="share">
            <ShareIcon /> 10
          </IconButton>
        </CardActions>

        {active && (
          <form
            action=""
            style={{ display: "flex", gap: "10px", marginBottom: "10px" }}
          >
            <input
              type="text"
              className="form-control"
              placeholder="enter comment"
              onChange={(e)=>setContent(e.target.value)}
            />
            <button
              type="submit"
              className="btn btn-primary "
              onClick={() => {
                addComment(res._id)
              }}
            >
              post
            </button>
          </form>
        )}
      </Card>
       <br />
       <br />
    </Container>
      </div>
      )}
     
    </div>
  );
};

export default Home;
