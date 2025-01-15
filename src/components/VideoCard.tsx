import "./VideoCard.css";
import { MoreVert } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import AvatarImage from "../assets/images/video_card/avatar.jpg";

interface VideoCardProps {
  thumbnail: string;
}

function VideoCard({thumbnail}: VideoCardProps) {
  return (
  <div className="videoCard">
    <div className="videoImgWrapper">
    <img className="videoImg" src={thumbnail} alt="Video Thumbnail"/>
    <div className="duration">15:07</div>
    </div>
    <div className="videoData">
      <Avatar src={AvatarImage}/> 
      <div className="channelDetails">
        <h5>React JS Netflix Clone Tutorial | #5-Homepage Component</h5>
        <p className="c_name">devNtech</p>
        <p className="videoStats">200 views &bull; 1 week ago</p>
      </div>
      <MoreVert className="moreIcon"/>
    </div>
  </div>
  );
}
export default VideoCard;
