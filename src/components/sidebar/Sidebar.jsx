import './sidebar.css';
import {RssFeed, Message, OndemandVideo, Group, Bookmark, HelpOutline, Work, Event, School} from '@mui/icons-material';
export default function Sidebar() {
  return (
    <div className="sidebarContainer">
      <ul className="sidebarList">
        <li className="sidebarListItem">
          <RssFeed className="sidebarIcon"/>
          <span className="sidebarItemText">Feed</span>
        </li>
        <li className="sidebarListItem">
          <Message className="sidebarIcon"/>
          <span className="sidebarItemText">Chats</span>
        </li>
        <li className="sidebarListItem">
          <OndemandVideo className="sidebarIcon"/>
          <span className="sidebarItemText">Videos</span>
        </li>
        <li className="sidebarListItem">
          <Group className="sidebarIcon"/>
          <span className="sidebarItemText">Groups</span>
        </li>
        <li className="sidebarListItem">
          <Bookmark className="sidebarIcon"/>
          <span className="sidebarItemText">My items</span>
        </li>
        <li className="sidebarListItem">
          <HelpOutline className="sidebarIcon"/>
          <span className="sidebarItemText">Questions</span>
        </li>
        <li className="sidebarListItem">
          <Work className="sidebarIcon"/>
          <span className="sidebarItemText">Jobs</span>
        </li>
        <li className="sidebarListItem">
          <Event className="sidebarIcon"/>
          <span className="sidebarItemText">Events</span>
        </li>
        <li className="sidebarListItem">
          <School className="sidebarIcon"/>
          <span className="sidebarItemText">Courses</span>
        </li>
      </ul>
      <button className="sidebarButton">Show More</button>
      <hr className="sidebarHr" />
      <ul className="sidebarFriendList">
        <li className="sidebarFriend">
          <img src="assets/person/2.jpeg" alt="" className="friendImg" />
          <span className="sidebarFriendName">Dominic</span>
        </li>
        <li className="sidebarFriend">
          <img src="assets/person/3.jpg" alt="" className="friendImg" />
          <span className="sidebarFriendName">Nithin Thomas</span>
        </li>
        <li className="sidebarFriend">
          <img src="assets/person/4.jpeg" alt="" className="friendImg" />
          <span className="sidebarFriendName">Tom Sagar</span>
        </li>
        <li className="sidebarFriend">
          <img src="assets/person/6.jpeg" alt="" className="friendImg" />
          <span className="sidebarFriendName">Charles Justin</span>
        </li>
        <li className="sidebarFriend">
          <img src="assets/person/5.jpeg" alt="" className="friendImg" />
          <span className="sidebarFriendName">Akshay Km</span>
        </li>
        <li className="sidebarFriend">
          <img src="assets/person/8.jpeg" alt="" className="friendImg" />
          <span className="sidebarFriendName">Zubin Paul</span>
        </li>
        <li className="sidebarFriend">
          <img src="assets/person/7.jpeg" alt="" className="friendImg" />
          <span className="sidebarFriendName">Praveen Dom</span>
        </li>
        <li className="sidebarFriend">
          <img src="assets/person/9.jpeg" alt="" className="friendImg" />
          <span className="sidebarFriendName">Vishnu Pankan</span>
        </li>
      </ul>
    </div>
  )
}
