import { Link } from "react-router-dom";
import "./OnlineFriends.scss";

function OnlineFriends({ username, userPicture }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <Link
      to={`/profile/${username}`}
      style={{ textDecoration: "none", color: "black" }}
    >
      <li className="rightbar__friend">
        <div className="rightbar__profile-image__container">
          <img
            src={userPicture ? PF + userPicture : PF + "person/noAvatar.png"}
            className="rightbar__profile-image"
            alt="online friend"
          />
          <span className="rightbar__online"></span>
        </div>
        <span className="rightbar__username">{username}</span>
      </li>
    </Link>
  );
}

export default OnlineFriends;
