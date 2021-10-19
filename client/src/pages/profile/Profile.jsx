import "./Profile.scss";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useParams } from "react-router";
import { AuthContext } from "../../context/AuthContext";

const Profile = () => {
  const [user, setUser] = useState({});
  const params = useParams();
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const { user: currentUser } = useContext(AuthContext);


  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/users?username=${params.username}`);
      setUser(res.data);
    };

    fetchUser();
  }, [params.username]);
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
                src={currentUser.coverPicture ? PF + currentUser.coverPicture : PF +  "person/noCover.png"}
                alt="cover"
              />
              <img
                className="profile__user-image"
                src={currentUser.profilePicture ? PF + currentUser.profilePicture : PF + "person/noAvatar.png"}
                alt="avatar"
              />
            </div>
            <div className="profile__info">
              <h4 className="profile__info-name">{currentUser.username}</h4>
              <span className="profile__info-desc">{currentUser.desc}</span>
            </div>
          </div>
          <div className="profile__right-bottom">
            <Feed username={params.username} />
            <Rightbar user={currentUser} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
