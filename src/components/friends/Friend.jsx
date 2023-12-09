import "./friend.css";

const Friend = ({ friend }) => {
  return (
    <li className="sidebarFriend">
      <img src={friend.profilePicture} alt="" className="sidebarFriendImg" />
      <span className="sidebarFriendName">{friend.username}</span>
    </li>
  );
};

export default Friend;
