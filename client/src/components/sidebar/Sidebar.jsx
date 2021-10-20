import { Link } from "react-router-dom";
import { Users } from "../../dummyData";
import Friends from "../Friends/Friends";
import "./Sidebar.scss";

const Sidebar = () => {
  return (
    <div className="sidebar__container">
      <div className="sidebar__wrapper">
        <ul className="sidebar__list">
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            <li className="sidebar__item">
              <span className="material-icons-outlined sidebar__icon">
                feed
              </span>
              <span className="sidebar__item__text">Feed</span>
            </li>
          </Link>
          <li className="sidebar__item">
            <span className="material-icons-outlined sidebar__icon">
              question_answer
            </span>
            <span className="sidebar__item__text">Chats</span>
          </li>
          <li className="sidebar__item">
            <span className="material-icons-outlined sidebar__icon">movie</span>
            <span className="sidebar__item__text">Videos</span>
          </li>
        </ul>
        <button className="sidebar__button">Show more</button>
        <hr className="sidebar__hr" />
        <ul className="sidebar__friends">
          {Users.map((u) => (
            <Friends key={u.id} user={u} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
