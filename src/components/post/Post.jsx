import './post.css';
import {MoreVert} from '@mui/icons-material';
import {useState} from "react";


export default function Post() {
    const [like,setLike] = useState(0);
    const likeHandler =()=>{
        setLike(like+1);
    }

  return (
    <div className="postContainer">
        <div className="postTop">
            <div className="postTopLeft">
            <img src="assets/person/1.jpg" alt="" className="postProfileImg" />
            <span className="postUsername">Nevin Paul</span>
            <span className="postDate">2 mins ago</span>
            </div>
            <div className="postTopRight">
                <MoreVert />
            </div>
        </div>
        <div className="postCenter">
            <span className="postCaption">Like my post..</span>
            <img src="assets/post/1.jpeg" alt="" className="postImg" />
        </div>
        <div className="postBottom">
            <div className="postBottomLeft">
                <img src="assets/heart.png" onClick={likeHandler} alt="" className="likeIcon" />
                <span className="likesCount">{like} likes</span>
            </div>
            <div className="postBottomRight">
                <span className="commentCount">43 comments</span>
            </div>
        </div>
    </div>
  )
}
