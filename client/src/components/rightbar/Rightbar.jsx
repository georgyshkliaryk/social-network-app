import "./Rightbar.scss";
import { Users } from "../../dummyData";
import OnlineFriends from "../onlineFriends/OnlineFriends";

const Rightbar = () => {
  return (
    <div className="rightbar__container">
      <div className="rightbar__wrapper">
        <div className="birthday__container">
          <img
            src="/assets/gift.png"
            className="birthday__image"
            alt="birthday"
          />
          <span className="birthday__text">
            <b>Mike Snap</b> and <b>2 other friends</b> have a birthday today!
          </span>
        </div>
        <img src="/assets/ad.png" alt="ad" className="rightbar__ad" />
        <h4 className="rightbar__title">Friends Online</h4>
        <ul className="rightbar__friend__list">
          {Users.map(u => (
            <OnlineFriends key={u.id} user={u} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Rightbar;
