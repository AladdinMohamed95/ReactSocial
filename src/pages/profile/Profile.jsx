import "./profile.css";
import Topbar from "../../components/topBar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";

const Profile = () => {
  return (
    <div>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src="/assets/post/3.jpeg"
                alt=""
              />
              <img
                className="profileUserImg"
                src="/assets/person/4.jpeg"
                alt=""
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">Aladdin Mohamed</h4>
              <span className="profileInfoDesc">
                وإنكِ مُسكني وسَكَني وسَكينتي وسَاكنَتي وسُكُوني وسُكُوتي وسِكتي
                وسكْرَتي وسُكرَتي
              </span>
            </div>
          </div>
          <div className="profileRightbottom">
            <Feed />
            <Rightbar profile />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
