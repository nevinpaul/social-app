import Post from '../post/Post';
import Share from '../share/Share';
import './feed.css';

export default function Feed() {
  return (
    <div className='feedContainer'>
      <Share />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  )
}
