import "./Topbar.scss";

const Topbar = () => {
  return (
    <div className="topbar__container">
      <div className="topbar__left">
        <span className="logo">gSocial</span>
      </div>
      <div className="topbar__center">
        <div className="searchbar">
          <span class="material-icons-outlined">search</span>
          <input
            type="text"
            placeholder="Search for friends, posts or videos"
            className="search__input"
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
            <span class="material-icons-outlined">person_outline</span>
            <span className="topbar__item__icon__badge">1</span>
          </div>
          <div className="topbar__icon__item">
            <span class="material-icons-outlined">question_answer</span>
            <span className="topbar__item__icon__badge">2</span>
          </div>
          <div className="topbar__icon__item">
            <span class="material-icons-outlined">notifications</span>
            <span className="topbar__item__icon__badge">4</span>
          </div>
        </div>
        <img src="" alt="" className="topbar__image" />
      </div>
    </div>
  );
};

export default Topbar;
