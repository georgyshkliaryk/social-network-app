import "./Rightbar.scss";
import { Users } from "../../dummyData";
import OnlineFriends from "../onlineFriends/OnlineFriends";

function Rightbar({ user }) {
  const HomeRightbar = () => {
    return (
      <>
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
          {Users.map((u) => (
            <OnlineFriends key={u.id} user={u} />
          ))}
        </ul>
      </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="rightbar__profile-title">User Information</h4>
        <div className="rightbar__info">
          <div className="rightbar__info-item">
            <span className="rightbar__info-key">City:</span>
            <span className="rightbar__info-value">{user.city || "-"}</span>
          </div>
          <div className="rightbar__info-item">
            <span className="rightbar__info-key">From:</span>
            <span className="rightbar__info-value">{user.from || "-"}</span>
          </div>
          <div className="rightbar__info-item">
            <span className="rightbar__info-key">Relationship:</span>
            <span className="rightbar__info-value">
              {user.relationship === 1
                ? "Single"
                : user.relationship === 2
                ? "Married"
                : "-"}
            </span>
          </div>
        </div>
        <h4 className="rightbar__title">Friends</h4>
        <div className="rightbar__followings">
          <div className="rightbar__following">
            <img
              src="/assets/person/1.jpeg"
              alt="friend"
              className="rightbar__following-image"
            />
            <span className="rightbar__following-name">Lars Carter</span>
          </div>
          <div className="rightbar__following">
            <img
              src="/assets/person/1.jpeg"
              alt="friend"
              className="rightbar__following-image"
            />
            <span className="rightbar__following-name">Lars Carter</span>
          </div>
          <div className="rightbar__following">
            <img
              src="/assets/person/1.jpeg"
              alt="friend"
              className="rightbar__following-image"
            />
            <span className="rightbar__following-name">Lars Carter</span>
          </div>
          <div className="rightbar__following">
            <img
              src="/assets/person/1.jpeg"
              alt="friend"
              className="rightbar__following-image"
            />
            <span className="rightbar__following-name">Lars Carter</span>
          </div>
          <div className="rightbar__following">
            <img
              src="/assets/person/1.jpeg"
              alt="friend"
              className="rightbar__following-image"
            />
            <span className="rightbar__following-name">Lars Carter</span>
          </div>
          <div className="rightbar__following">
            <img
              src="/assets/person/1.jpeg"
              alt="friend"
              className="rightbar__following-image"
            />
            <span className="rightbar__following-name">Lars Carter</span>
          </div>
        </div>
      </>
    );
  };
  return (
    <div className="rightbar__container">
      <div className="rightbar__wrapper">
        {user ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
}

export default Rightbar;
