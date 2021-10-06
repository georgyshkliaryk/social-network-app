import "./Rightbar.scss";

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
          <li className="rightbar__friend">
            <div className="rightbar__profile-image__container">
              <img
                src="/assets/person/3.jpeg"
                className="rightbar__profile-image"
                alt="online friend"
              />
              <span className="rightbar__online"></span>
            </div>
            <span className="rightbar__username">Lara Nilson</span>
          </li>
          <li className="rightbar__friend">
            <div className="rightbar__profile-image__container">
              <img
                src="/assets/person/3.jpeg"
                className="rightbar__profile-image"
                alt="online friend"
              />
              <span className="rightbar__online"></span>
            </div>
            <span className="rightbar__username">Lara Nilson</span>
          </li>
          <li className="rightbar__friend">
            <div className="rightbar__profile-image__container">
              <img
                src="/assets/person/3.jpeg"
                className="rightbar__profile-image"
                alt="online friend"
              />
              <span className="rightbar__online"></span>
            </div>
            <span className="rightbar__username">Lara Nilson</span>
          </li>
          <li className="rightbar__friend">
            <div className="rightbar__profile-image__container">
              <img
                src="/assets/person/3.jpeg"
                className="rightbar__profile-image"
                alt="online friend"
              />
              <span className="rightbar__online"></span>
            </div>
            <span className="rightbar__username">Lara Nilson</span>
          </li>
          <li className="rightbar__friend">
            <div className="rightbar__profile-image__container">
              <img
                src="/assets/person/3.jpeg"
                className="rightbar__profile-image"
                alt="online friend"
              />
              <span className="rightbar__online"></span>
            </div>
            <span className="rightbar__username">Lara Nilson</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Rightbar;
