import "./Profile.scss";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";

const Profile = () => {
  return (
    <>
      <Topbar />
      <div className="profile__container">
        <Sidebar />
        <div className="profile__right">
          <div className="profile__right-top">
            <div className="profile__cover">
              <img
                className="profile__cover-image"
                src="/assets/post/3.jpeg"
                alt="cover"
              />
              <img
                className="profile__user-image"
                src="/assets/person/7.jpeg"
                alt="avatar"
              />
            </div>
            <div className="profile__info">
              <h4 className="profile__info-name">My Name</h4>
              <span className="profile__info-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                facilis fuga provident necessitatibus. Magni distinctio debitis
                consequatur, veritatis maxime, consequuntur sapiente provident
                explicabo natus enim quidem pariatur officiis eaque delectus.
              </span>
            </div>
          </div>
          <div className="profile__right-bottom">
            <Feed />
            <Rightbar profile/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
