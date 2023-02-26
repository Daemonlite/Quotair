import { useState } from "react";
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
const Home = () => {
  const [active, setActive] = useState(false);
  return (
    <div className="position">
      <div className="post">
        <br />
        <div className="ava">
          <div className="avatar">
            <Avatar />
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
      <Container maxWidth="sm">
        <Card sx={{ maxWidth: 600 }}>
          <CardContent>
            <div className="click" style={{ display: "flex", gap: "10px" }}>
              <Avatar
                alt="Eugene "
                src="https://media.licdn.com/dms/image/C4D22AQFd15BBGsbh8Q/feedshare-shrink_800/0/1676936508937?e=1680134400&v=beta&t=vHNkjIdTBFrSGTe3S2gFGZlR-9vsY1P4u5l5yhYFO4E"
              />{" "}
              <p
                style={{
                  fontSize: "1rem",
                  marginTop: "10px",
                  fontWeight: "bold",
                  color: "darkgray",
                }}
              >
                Eugene Nunoo <VerifiedOutlinedIcon/>
              </p>
              <div className="follow">
              +Follow
              </div>
            </div>

            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardMedia
            sx={{ height: 300 }}
            image="https://media.licdn.com/dms/image/C4D22AQFd15BBGsbh8Q/feedshare-shrink_800/0/1676936508937?e=1680134400&v=beta&t=vHNkjIdTBFrSGTe3S2gFGZlR-9vsY1P4u5l5yhYFO4E"
            title="green iguana"
          />

          <CardActions sx={{ display: "flex", justifyContent: "space-around" }}>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon /> 12,234
            </IconButton>

            <IconButton aria-label="comment">
              <ChatBubbleOutlineIcon onClick={() => setActive(true)} /> 1,234
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
              />
              <button
                type="submit"
                className="btn btn-primary "
                onClick={() => setActive(false)}
              >
                post
              </button>
            </form>
          )}
        </Card>
      </Container>
    </div>
  );
};

export default Home;
