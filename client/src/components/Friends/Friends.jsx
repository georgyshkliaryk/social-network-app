import { Link } from "react-router-dom";
import { format } from "timeago.js";

function Friends({ user, isFriends }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <Link
      to={`/profile/${user.username}`}
      style={{ textDecoration: "none", color: "black" }}
    >
      <li className="sidebar__friend">
        <img
          src={
            user.profilePicture
              ? PF + user.profilePicture
              : PF + "person/noAvatar.png"
          }
          alt="friend"
          className="sidebar__friend__image"
        />
        <span className="sidebar__friend__name">{user.username}</span>
        {isFriends && (
          <span className="material-icons sidebar__is-friend" title="Friends">
            people
          </span>
        )}
        <div className="sidebar__friend-joined">Joined {format(user.createdAt)}</div>
      </li>
    </Link>
  );
}

export default Friends;
