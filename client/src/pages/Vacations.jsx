import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { useNavigate } from "react-router-dom";
import {useEffect,useState} from 'react'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import axios from 'axios'
const ExpandMore = styled((props) => {

  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Vacations() {
    const navigate = useNavigate;
    const user = JSON.parse(localStorage.getItem("userInfo"));
    const [vacations,setVacation] = useState([])
  
    if (!user) {
      navigate("/");
    }
  
    useEffect(() => {
      axios
        .get("http://localhost:9000/api/vacations")
        .then((res) => setVacation(res.data))
        .catch((err) => console.log(err));
    }, []);
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
 <a href="/vacations/create" >add vacation spot</a>
    <div style={{ display: "flex", justifyContent: "center", flexWrap: 'wrap',gap:"20px",width:"1300px"}} className='position'>
    
          {vacations.sort().map((res) =>
           <Card sx={{ maxWidth: 345,objectFit:"contain" }}>
              <Typography sx={{ display: "flex", gap: "10px" }}>
                  <Avatar src={res.userProfile} sx={{ marginTop: "20px", marginLeft: "10px" }} />
                  <CardHeader
                      title={res.userName}
                      subheader={res.createdAt} />
              </Typography>
              <CardMedia
                  component="img"
                  height="194"
                  image={res.photo}
                  alt='image' />
              <CardContent>
                  <Typography variant="body2" color="text.secondary">
                      <IconButton aria-label="settings">
                          <PushPinOutlinedIcon />
                      </IconButton>
                      {res.name}
                      <br />
                      <IconButton aria-label="add to favorites">
                          <LocationOnOutlinedIcon />
                      </IconButton>
                      {res.location}
                  </Typography>
              </CardContent>
              <CardActions disableSpacing>
                  <IconButton aria-label="add to favorites">
                      <FavoriteIcon />
                  </IconButton>
                  <IconButton aria-label="share">
                      <ShareIcon />
                  </IconButton>
                  <ExpandMore
                      expand={expanded}
                      onClick={handleExpandClick}
                      aria-expanded={expanded}
                      aria-label="show more"
                  >
                      <ExpandMoreIcon />
                  </ExpandMore>
              </CardActions>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                  <CardContent>
                      <Typography paragraph>Synopsis:</Typography>
                      <Typography paragraph>
                          {res.description}
                      </Typography>
                  </CardContent>
              </Collapse>
          </Card>
          )}
          
      </div>
      
      </>
   
  );
}