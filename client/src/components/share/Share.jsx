import "./Share.scss";

const Share = () => {
  return (
    <div className="share__container">
      <div className="share__wrapper">
        <div className="share__top">
          <img
            src="/assets/person/7.jpeg"
            className="share__profile-image"
            alt=""
          />
          <input
            type="text"
            placeholder="What's in your mind?"
            className="share__input"
          />
        </div>
        <hr className="share__hr" />
        <div className="share__bottom">
          <div className="share__options">
            <div className="share__option">
              <span class="material-icons share__icon tomato">perm_media</span>
              <span className="share__option__text">Photo or Video</span>
            </div>
            <div className="share__option">
              <span class="material-icons share__icon blue">label</span>
              <span className="share__option__text">Tag</span>
            </div>
            <div className="share__option">
              <span class="material-icons share__icon green">location_on</span>
              <span className="share__option__text">Location</span>
            </div>
            <div className="share__option">
              <span class="material-icons share__icon golden">emoji_emotions</span>
              <span className="share__option__text">Emotion</span>
            </div>
          </div>
          <button className="share__button">Share</button>
        </div>
      </div>
    </div>
  );
};

export default Share;
