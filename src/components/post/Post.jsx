import './post.css';
import {MoreVert} from '@mui/icons-material';

export default function Post() {
  return (
    <div className="postContainer">
        <div className="postTop">
            <div className="postTopLeft">
            <img src="assets/person/7.jpeg" alt="" className="postProfileImg" />
            <span className="postUsername">Praveen Dom</span>
            <span className="postDate">2 mins ago</span>
            </div>
            <div className="postTopRight">
                <MoreVert />
            </div>
        </div>
        <div className="postCenter">
            <span className="postCaption">My first post..</span>
            <img src="assets/post/1.jpeg" alt="" className="postImg" />
        </div>
        <div className="postBottom">
            <div className="postBottomLeft">
                <img src="assets/like.png" alt="" className="likeIcon" />
                <img src="assets/heart.png" alt="" className="likeIcon" />
                <span className="likesCount">130 likes</span>
            </div>
            <div className="postBottomRight">
                <span className="commentCount">43 comments</span>
            </div>
        </div>
    </div>
  )
}
