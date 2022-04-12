import "./share.css";
import {PermMedia, Label, LocationOn, EmojiEmotions} from '@mui/icons-material';

export default function Share() {
  return (
    <div className="shareContainer">
      <div className="shareTop">
        <img src="assets/person/1.jpg" alt="" className="shareProfileImg" />
        <input placeholder="What's in your mind?" className="shareInput" />
      </div>
      <hr className="shareHr" />
      <div className="shareBottom">
          <div className="shareBottomItem">
          <PermMedia htmlColor="tomato" className="shareIcon" />
          <span className="shareItemName">Photo or Video</span>
          </div>
          <div className="shareBottomItem">
          <Label htmlColor="blue" className="shareIcon" />
          <span className="shareItemName">Tag</span>
          </div>
          <div className="shareBottomItem">
          <LocationOn htmlColor="green" className="shareIcon" />
          <span className="shareItemName">Location</span>
          </div>
          <div className="shareBottomItem">
          <EmojiEmotions htmlColor="goldenrod" className="shareIcon" />
          <span className="shareItemName">Feelings</span>
          </div>
          <button className="shareButton">Share</button>
      </div>
    </div>
  )
}
