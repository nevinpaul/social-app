import './rightbar.css';

export default function Rightbar() {
  return (
    <div className='rightbarContainer'>
      <div className="birthday">
        <img src="assets/gift.png" alt="" className="birthdayIcon" />
        <span className="birthdayText"><b>Akshay Km</b> and <b>3 other friends</b> have Birthday today.</span>
      </div>
      <div className="ad">
        <img src="assets/react18.png" alt="" className="adImg" />
      </div>
    </div>
  )
}
 