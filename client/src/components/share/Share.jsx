import { useContext, useRef, useState, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
import "./Share.scss";
import axios from "axios";
import { Link } from "react-router-dom";

const Share = () => {
  const { user } = useContext(AuthContext);
  const desc = useRef();
  const [file, setFile] = useState(null);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [warning, setWarning] = useState("");

  useEffect(() => {}, [user]);

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
      if (desc.current.value != "" || file) {
        setWarning("");
        await axios.post("/posts", newPost);
        window.location.reload();
      } else {
        setWarning("Please write something or add a photo!");
      }
    } catch (err) {}
  };

  return (
    <div className="share__container">
      <div className="share__wrapper">
        <div className="share__top">
          <Link to={`/profile/${user.username}`}>
            <img
              src={
                user.profilePicture
                  ? PF + user.profilePicture
                  : PF + "person/noAvatar.png"
              }
              className="share__profile-image"
              alt="avatar"
            />
          </Link>
          <input
            type="text"
            placeholder={"What's on your mind, " + user.username + "?"}
            className="share__input"
            ref={desc}
          />
        </div>
        <hr className="share__hr" />
        <span className="share__error">{warning}</span>
        {file && (
          <div className="share__img-container">
            <img
              src={URL.createObjectURL(file)}
              alt="preview"
              className="share__img"
            />
            <button
              className="share__cancel-btn"
              onClick={() => {
                setFile(null);
              }}
            >
              <span className="material-icons-outlined red">delete</span>
            </button>
          </div>
        )}
        <form className="share__bottom" onSubmit={handleSubmit}>
          <div className="share__options">
            <label htmlFor="file-id" className="share__option">
              <span className="material-icons share__icon tomato">
                perm_media
              </span>
              <span className="share__option__text">Photo or Video</span>
              <input
                type="file"
                id="file-id"
                accept=".png,.jpeg,.jpg"
                onChange={(e) => {
                  setFile(e.target.files[0]);
                }}
                onClick={(e) => (e.target.value = null)}
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
