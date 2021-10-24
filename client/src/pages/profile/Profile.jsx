import "./Profile.scss";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import { useState, useEffect, useContext, useRef } from "react";
import axios from "axios";
import { useParams } from "react-router";
import { AuthContext } from "../../context/AuthContext";

const Profile = () => {
  const [user, setUser] = useState({});
  const params = useParams();
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const { user: currentUser } = useContext(AuthContext);
  const [file, setFile] = useState(null);
  const [fileCover, setFileCover] = useState(null);
  const [isEdit, setIsEdit] = useState(false);
  const desc = useRef();

  const handleChangePhoto = async (e) => {
    e.preventDefault();
    const updatedPhoto = {
      userId: currentUser._id,
    };
    if (file) {
      const data = new FormData();
      const fileName = Date.now() + file.name;
      data.append("name", fileName);
      data.append("file", file);
      updatedPhoto.profilePicture = fileName;
      try {
        await axios.post("/upload", data);
      } catch (err) {
        console.log(err);
      }
    }

    try {
      axios.put("/users/" + currentUser._id, updatedPhoto);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  const handleChangeCover = async (e) => {
    e.preventDefault();
    const updatedCover = {
      userId: currentUser._id,
    };
    if (fileCover) {
      const data = new FormData();
      const fileName = Date.now() + fileCover.name;
      data.append("name", fileName);
      data.append("file", fileCover);
      updatedCover.coverPicture = fileName;
      try {
        await axios.post("/upload", data);
      } catch (err) {
        console.log(err);
      }
    }

    try {
      axios.put("/users/" + currentUser._id, updatedCover);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  const handleEditDesc = (e) => {
    e.preventDefault();
    setIsEdit(true);
  };

  const handleEditDescSubmit = async (e) => {
    e.preventDefault();
    const editedInfo = {
      desc: desc.current.value.trim(),
      userId: currentUser._id,
    };
    try {
      await axios.put("/users/" + currentUser._id, editedInfo);
    } catch (err) {
      console.log(err);
    }
    window.location.reload();
  };

  const handleEditDescCancel = (e) => {
    e.preventDefault();
    setIsEdit(false);
  };

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/users?username=${params.username}`);
      setUser(res.data);
    };
    fetchUser();
  }, [params.username]);

  useEffect(() => {
    file && setFileCover(null);
  }, [file]);

  useEffect(() => {
    fileCover && setFile(null);
  }, [fileCover]);

  return (
    <>
      <Topbar />
      <div className="profile__container">
        <Sidebar user={user} />
        <div className="profile__right">
          <div className="profile__right-top">
            <div className="profile__cover">
              {user._id === currentUser._id ? (
                fileCover ? (
                  <div>
                    <div className="profile__cover-wrapper">
                      <img
                        className="profile__cover-image"
                        src={URL.createObjectURL(fileCover)}
                        alt="cover"
                      />
                    </div>
                    <div className="profile__cover-btns">
                      <button
                        className="profile__update-btn submit"
                        onClick={handleChangeCover}
                      >
                        Update cover
                      </button>
                      <button
                        className="profile__update-btn cancel"
                        onClick={() => setFileCover(null)}
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                ) : (
                  <div>
                    <div className="profile__cover-wrapper">
                      <img
                        className="profile__cover-image"
                        src={
                          user.coverPicture
                            ? PF + user.coverPicture
                            : PF + "person/noCover.png"
                        }
                        alt="cover"
                      />
                      <label htmlFor="update-cover">
                        <span
                          className="material-icons edit-cover"
                          title="Update cover image"
                        >
                          edit
                        </span>
                      </label>
                    </div>
                    <input
                      type="file"
                      id="update-cover"
                      accept=".png,.jpeg,.jpg"
                      onChange={(e) => {
                        setFileCover(e.target.files[0]);
                      }}
                      style={{ display: "none" }}
                    />
                  </div>
                )
              ) : (
                <img
                  className="profile__cover-image"
                  src={
                    user.coverPicture
                      ? PF + user.coverPicture
                      : PF + "person/noCover.png"
                  }
                  alt="cover"
                />
              )}

              {user._id === currentUser._id ? (
                file ? (
                  <div>
                    <img
                      className="profile__user-image"
                      src={URL.createObjectURL(file)}
                      alt="avatar"
                    />
                    <div className="profile__update-btn-container">
                      <button
                        className="profile__update-btn submit"
                        onClick={handleChangePhoto}
                      >
                        Save new photo
                      </button>
                      <button
                        className="profile__update-btn cancel"
                        onClick={() => setFile(null)}
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                ) : (
                  <div>
                    <label
                      htmlFor="update-photo"
                      className="profile__photo-label"
                      title="Set new profile picture"
                    >
                      <img
                        className="profile__user-image"
                        src={
                          user.profilePicture
                            ? PF + user.profilePicture
                            : PF + "person/noAvatar.png"
                        }
                        alt="avatar"
                      />
                    </label>
                    <div className="profile__update-photo-btn">
                      <span className="material-icons">file_upload</span>
                    </div>
                  </div>
                )
              ) : (
                <img
                  className="profile__user-image"
                  src={
                    user.profilePicture
                      ? PF + user.profilePicture
                      : PF + "person/noAvatar.png"
                  }
                  alt="avatar"
                />
              )}

              <input
                type="file"
                id="update-photo"
                accept=".png,.jpeg,.jpg"
                onChange={(e) => {
                  setFile(e.target.files[0]);
                }}
                style={{ display: "none" }}
              />
            </div>
            <div
              className="profile__info"
              style={file && { marginTop: "40px" }}
            >
              <h4 className="profile__info-name">{user.username}</h4>

              <div className="profile__info-desc">
                {user._id === currentUser._id &&
                  (user.desc === "" ? (
                    <button
                      className="profile__add-desc-btn"
                      onClick={handleEditDesc}
                      style={
                        isEdit ? { display: "none" } : { display: "flex" }
                      }
                    >
                      <span class="material-icons">add</span>Add description
                    </button>
                  ) : (
                    <span
                      className="material-icons profile__edit-desc"
                      title="Edit description"
                      onClick={handleEditDesc}
                      style={
                        isEdit ? { display: "none" } : { display: "inline" }
                      }
                    >
                      edit
                    </span>
                  ))}
                {!isEdit ? (
                  user.desc
                ) : (
                  <form onSubmit={handleEditDescSubmit}>
                    <input
                      type="text"
                      name="edit-desc"
                      id="edit-desc"
                      className="profile__desc-textarea"
                      ref={desc}
                      defaultValue={user.desc}
                    ></input>
                    <div>
                      <button
                        type="submit"
                        className="profile__update-btn submit"
                      >
                        Save
                      </button>
                      <button
                        onClick={handleEditDescCancel}
                        className="profile__update-btn cancel"
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
          <div className="profile__right-bottom">
            <Feed username={params.username} />
            <Rightbar user={user} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
