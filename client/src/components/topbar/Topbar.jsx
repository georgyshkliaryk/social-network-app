import "./Topbar.scss";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const Topbar = () => {
  const { user } = useContext(AuthContext);

  const handleLogout = () => {
    localStorage.setItem("user", null);
    window.location.reload();
  };
  return (
    <div className="topbar__container">
      <div className="topbar__left">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="topbar__logo" title="Home">gSocial</span>
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
          <span className="topbar__link">Homepage</span>
          <span className="topbar__link">Feed</span>
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
          <Link to={`/profile/${user?.username}`}>
            <img
              src={
                user?.profilePicture
                  ? `/assets/${user?.profilePicture}`
                  : "/assets/person/noAvatar.png"
              }
              alt="avatar"
              className="topbar__image"
              title="View Profile"
            />
          </Link>
          <div className="topbar__logout" onClick={handleLogout} title="Logout">
            <span class="material-icons">logout</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
