import "./topbar.css";
import { Search, Person, Chat, Notifications } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const Topbar = () => {
  const navigate = useNavigate();
  const handleHomepage = () => {
    navigate("/");
  };
  const hanldeProfile = () => {
    navigate("/Profile");
  };
  const handleLogin = () => {
    navigate("/Login");
  };
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <div className="logoContainer">
          <span className="logo">A</span>
        </div>
      </div>

      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon" />
          <input
            placeholder="Search for friend, post or video"
            className="searchInput"
          />
        </div>
      </div>

      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink" onClick={handleHomepage}>
            Homepage
          </span>
          <span className="topbarLink">Timeline</span>
          <span className="topbarLink" onClick={handleLogin}>
            Log In
          </span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Chat />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <Notifications />
            <span className="topbarIconBadge">3</span>
          </div>
        </div>
        <img
          src="/assets/person/1.jpeg"
          alt=""
          className="topbarImg"
          onClick={hanldeProfile}
        />
      </div>
    </div>
  );
};

export default Topbar;
