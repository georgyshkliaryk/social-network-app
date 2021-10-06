import "./Topbar.scss";

const Topbar = () => {
  return (
    <div className="topbar__container">
      <div className="topbar__left">
        <span className="topbar__logo">gSocial</span>
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
        <img src="/assets/person/8.jpeg" alt="avatar" className="topbar__image" />
      </div>
    </div>
  );
};

export default Topbar;
