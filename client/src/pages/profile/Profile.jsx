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
  const [file, setFile] = useState(null);

  const handleChangePhoto = async (e) => {
    e.preventDefault();
    const updatedPhoto = {
      userId: currentUser._id,
    };
    if (file) {
      const data = new FormData();
      const fileName = Date.now() + file.name;
      data.append("name", fileName);
      data.append("file", file);
      updatedPhoto.profilePicture = fileName;
      try {
        await axios.post("/upload", data);
      } catch (err) {
        console.log(err);
      }
    }

    try {
      axios.put("/users/" + currentUser._id, updatedPhoto);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

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
        <Sidebar user={user} />
        <div className="profile__right">
          <div className="profile__right-top">
            <div className="profile__cover">
              <img
                className="profile__cover-image"
                src={
                  user.coverPicture
                    ? PF + user.coverPicture
                    : PF + "person/noCover.png"
                }
                alt="cover"
              />
              <div className="wrap">
                <label htmlFor="update-photo" className="profile__photo-label">
                  <img
                    className="profile__user-image"
                    src={
                      user.profilePicture
                        ? PF + user.profilePicture
                        : PF + "person/noAvatar.png"
                    }
                    alt="avatar"
                    // onClick={handleChangePhoto}
                  />
                </label>
              </div>
              <input
                type="file"
                id="update-photo"
                accept=".png,.jpeg,.jpg"
                onChange={(e) => {
                  setFile(e.target.files[0]);
                }}
                // onClick={(e) => (e.target.value = null)}
                // style={{ display: "none" }}
              />
              <button onClick={handleChangePhoto}>update photo</button>
            </div>
            <div className="profile__info">
              <h4 className="profile__info-name">{user.username}</h4>
              <span className="profile__info-desc">{user.desc}</span>
            </div>
          </div>
          <div className="profile__right-bottom">
            <Feed username={params.username} />
            <Rightbar user={user} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
