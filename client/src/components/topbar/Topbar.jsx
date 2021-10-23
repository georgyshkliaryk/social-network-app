import "./Topbar.scss";
import { Link } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";

const Topbar = () => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  const { user: currentUser } = useContext(AuthContext);
  const url = window.location.pathname.split("/").pop();

  const [modal, setModal] = useState("none");
  const [modalColor, setModalColor] = useState("white");
  const [user, setUser] = useState({});

  const handleProfileModal = () => {
    modal == "none" ? setModal("block") : setModal("none");
    modal == "none" ? setModalColor("yellow") : setModalColor("white");
    console.log(user);
  };

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/users?userId=${currentUser._id}`);
      setUser(res.data);
    };

    fetchUser();
  }, [user.profilePicture, user.coverPicture]);

  useEffect(() => {
    setModal("none");
    setModalColor("white");
  }, [url]);

  const handleLogout = () => {
    localStorage.setItem("user", null);
    window.location.reload();
  };
  return (
    <div className="topbar__container">
      <div className="topbar__left">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="topbar__logo" title="Home">
            gSocial
          </span>
        </Link>
      </div>
      <div className="topbar__center">
        <div className="topbar__searchbar">
          <span className="material-icons-outlined search__icon">search</span>
          <input
            type="text"
            placeholder="Search for friends, posts or videos"
            className="topbar__search__input"
          />
        </div>
      </div>
      <div className="topbar__right">
        <div className="topbar__links">
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            <span className="topbar__link">Feed</span>
          </Link>
          <span className="topbar__link">Chats</span>
        </div>
        <div className="topbar__icons">
          <div className="topbar__icon__item">
            <span className="material-icons-outlined">person_outline</span>
            <span className="topbar__item__icon__badge">1</span>
          </div>
          <div className="topbar__icon__item">
            <span className="material-icons-outlined">question_answer</span>
            <span className="topbar__item__icon__badge">2</span>
          </div>
          <div className="topbar__icon__item">
            <span className="material-icons-outlined">notifications</span>
            <span className="topbar__item__icon__badge">4</span>
          </div>
        </div>
        <div className="topbar__right-logout">
          <img
            src={
              user?.profilePicture
                ? PF + user?.profilePicture
                : PF + "person/noAvatar.png"
            }
            alt="avatar"
            className="topbar__image"
            title="View Profile"
            onClick={handleProfileModal}
            style={{ borderColor: modalColor }}
          />
          <div className="topbar__modal" style={{ display: modal }}>
            <Link
              to={`/profile/${user?.username}`}
              style={{ textDecoration: "none", color: "black" }}
            >
              <div className="topbar__modal-item">
                <div> View Profile </div>
                <div>
                  <span className="material-icons">account_circle</span>
                </div>
              </div>
            </Link>
            <div className="topbar__modal-item">
              <div> Settings </div>
              <div>
                <span className="material-icons">settings</span>
              </div>
            </div>
            <div className="topbar__modal-item" onClick={handleLogout}>
              <div>Logout </div>
              <div>
                <span className="material-icons">logout</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
