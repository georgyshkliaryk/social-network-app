import { useContext, useRef, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import "./Share.scss";
import axios from "axios";

const Share = () => {
  const { user } = useContext(AuthContext);
  const desc = useRef();
  const [file, setFile] = useState(null);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      userId: user._id,
      desc: desc.current.value,
    };
    if (file) {
      const data = new FormData();
      const fileName = Date.now() + file.name;
      data.append("name", fileName);
      data.append("file", file);
      newPost.img = fileName;
      try {
        await axios.post("/upload", data);
      } catch (err) {
        console.log(err);
      }
    }

    try {
      await axios.post("/posts", newPost);
      window.location.reload();
    } catch (err) {}
  };

  return (
    <div className="share__container">
      <div className="share__wrapper">
        <div className="share__top">
          <img
            src={
              user.profilePicture
                ? PF + user.profilePicture
                : PF + "person/noAvatar.png"
            }
            className="share__profile-image"
            alt="avatar" 
          />
          <input
            type="text"
            placeholder={"What's on your mind " + user.username + "?"}
            className="share__input"
            ref={desc}
          /> 
        </div>
        <hr className="share__hr" />
        <form className="share__bottom" onSubmit={handleSubmit}>
          <div className="share__options">
            <label htmlFor="file" className="share__option">
              <span className="material-icons share__icon tomato">
                perm_media
              </span>
              <span className="share__option__text">Photo or Video</span>
              <input
                type="file"
                id="file" 
                accept=".png,.jpeg,.jpg"
                onChange={(e) => setFile(e.target.files[0])}
                style={{ display: "none" }}
              />
            </label>
            <div className="share__option">
              <span className="material-icons share__icon blue">label</span>
              <span className="share__option__text">Tag</span>
            </div>
            <div className="share__option">
              <span className="material-icons share__icon green">
                location_on
              </span>
              <span className="share__option__text">Location</span>
            </div>
            <div className="share__option">
              <span className="material-icons share__icon golden">
                emoji_emotions
              </span>
              <span className="share__option__text">Emotion</span>
            </div>
          </div>
          <button className="share__button" type="submit">
            Share
          </button>
        </form>
      </div>
    </div>
  );
};

export default Share;
