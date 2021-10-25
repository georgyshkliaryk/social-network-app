import "./Rightbar.scss";
import OnlineFriends from "../onlineFriends/OnlineFriends";
import { useContext, useEffect, useState, useRef } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

function Rightbar({ user }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  const url = window.location.pathname.split("/").pop();

  const { user: currentUser, dispatch } = useContext(AuthContext);
  const [friends, setFriends] = useState([]);
  const [followers, setFollowers] = useState([]);
  const [followed, setFollowed] = useState(
    currentUser.followings.includes(user?.id)
  );
  const [isEdit, setIsEdit] = useState(false);
  const city = useRef();
  const from = useRef();
  const relationship = useRef();
  const gender = useRef();
  const age = useRef();

  useEffect(() => {
    const getFriends = async () => {
      try {
        const friendList = await axios.get("/users/friends/" + user._id);
        setFriends(friendList.data);
      } catch (err) {
        console.log(err);
        const friendList = await axios.get("/users/friends/" + currentUser._id);
        setFriends(friendList.data);
      }
    };
    getFriends();
  }, [user]);

  useEffect(() => {
    const getFollowers = async () => {
      try {
        const followersList = await axios.get("/users/followers/" + user._id);
        setFollowers(followersList.data);
      } catch (err) {
        console.log(err);
        const followersList = await axios.get(
          "/users/followers/" + currentUser._id
        );
        setFollowers(followersList.data);
      }
    };
    getFollowers();
  }, [user]);

  useEffect(() => {
    setIsEdit(false);
  }, [url]);

  useEffect(() => {
    setFollowed(currentUser.followings.includes(user?._id));
  }, [user]);

  const handleClick = async (e) => {
    try {
      if (followed) {
        await axios.put("/users/" + user._id + "/unfollow", {
          userId: currentUser._id,
        });
        dispatch({ type: "UNFOLLOW", payload: user._id });
      } else {
        await axios.put("/users/" + user._id + "/follow", {
          userId: currentUser._id,
        });
        dispatch({ type: "FOLLOW", payload: user._id });
      }
    } catch (err) {
      console.log(err);
    }
    setFollowed(!followed);
  };

  const handleEditProfileInfo = (e) => {
    e.preventDefault();
    setIsEdit(true);
  };

  const handleEditProfileInfoCancel = (e) => {
    e.preventDefault();
    setIsEdit(false);
  };

  const handleEditProfileInfoSubmit = async (e) => {
    e.preventDefault();
    const editedInfo = {
      city: city.current.value.trim(),
      from: from.current.value.trim(),
      relationship: relationship.current.value,
      gender: gender.current.value,
      age: age.current.value.trim(),
      userId: currentUser._id,
    };
    try {
      await axios.put("/users/" + currentUser._id, editedInfo);
    } catch (err) {
      console.log(err);
    }
    window.location.reload();
  };

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
          {friends.map((friend) => (
            <OnlineFriends
              key={friend._id}
              username={friend.username}
              userPicture={friend.profilePicture}
            />
          ))}
        </ul>
      </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
        {user.username != currentUser.username && (
          <button className="rightbar__follow-btn" onClick={handleClick}>
            {followed ? "Unfollow" : "Follow"}
            {followed ? (
              <span className="material-icons-outlined">remove</span>
            ) : (
              <span className="material-icons-outlined">add</span>
            )}
          </button>
        )}
        <div className="rightbar__info-wrapper">
          <div className="rightbar__profile-title-wrapper">
            <h4 className="rightbar__profile-title">User Information</h4>
            {user.username === currentUser.username && (
              <span
                className="material-icons rightbar__profile-edit-info rightbar__profile-edit-info"
                title="Edit general information"
                onClick={handleEditProfileInfo}
                style={isEdit ? { display: "none" } : { display: "inline" }}
              >
                edit
              </span>
            )}
          </div>

          {!isEdit ? (
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
              <div className="rightbar__info-item">
                <span className="rightbar__info-key">Gender:</span>
                <span className="rightbar__info-value">
                  {user.gender === 1
                    ? "Male"
                    : user.gender === 2
                    ? "Female"
                    : "-"}
                </span>
              </div>
              <div className="rightbar__info-item">
                <span className="rightbar__info-key">Age:</span>
                <span className="rightbar__info-value">{user.age || "-"}</span>
              </div>
            </div>
          ) : (
            <form
              className="rightbar__info"
              onSubmit={handleEditProfileInfoSubmit}
            >
              <div className="rightbar__info-item">
                <span className="rightbar__info-key">City:</span>
                <input
                  type="text"
                  className="rightbar__info-input"
                  ref={city}
                  defaultValue={user.city}
                />
              </div>
              <div className="rightbar__info-item">
                <span className="rightbar__info-key">From:</span>
                <input
                  type="text"
                  className="rightbar__info-input"
                  ref={from}
                  defaultValue={user.from}
                />
              </div>
              <div className="rightbar__info-item">
                <span className="rightbar__info-key">Relationship:</span>
                <select
                  name="relation"
                  id="relation"
                  className="rightbar__info-select"
                  ref={relationship}
                  defaultValue={user.relationship}
                >
                  <option value="3">Not selected</option>
                  <option value="1">Single</option>
                  <option value="2">Married</option>
                </select>
              </div>
              <div className="rightbar__info-item">
                <span className="rightbar__info-key">Gender:</span>
                <select
                  name="gender"
                  id="gender"
                  className="rightbar__info-select"
                  ref={gender}
                  defaultValue={user.gender}
                >
                  <option value="3">Not selected</option>
                  <option value="1">Male</option>
                  <option value="2">Female</option>
                </select>
              </div>
              <div className="rightbar__info-item">
                <span className="rightbar__info-key">Age:</span>
                <input
                  type="text"
                  className="rightbar__info-input"
                  ref={age}
                  defaultValue={user.age}
                />
              </div>
              <div className="rightbar__edit-info-btn-wrapper">
                <button
                  type="submit"
                  className="rightbar__edit-info-btn submit"
                >
                  Save
                </button>
                <button
                  onClick={handleEditProfileInfoCancel}
                  className="rightbar__edit-info-btn cancel"
                >
                  Cancel
                </button>
              </div>
            </form>
          )}
        </div>

        {user.username === currentUser.username ? (
          <h4 className="rightbar__title">Users You Follow</h4>
        ) : (
          <h4 className="rightbar__title">Users {user.username} Follows</h4>
        )}
        <div className="rightbar__followings">
          {friends.map((friend) => (
            <Link
              key={friend._id}
              to={`/profile/${friend.username}`}
              style={{ textDecoration: "none", color: "black" }}
            >
              <div className="rightbar__following">
                <img
                  src={
                    friend.profilePicture
                      ? PF + friend.profilePicture
                      : PF + "person/noAvatar.png"
                  }
                  alt="friend"
                  className="rightbar__following-image"
                />
                <span className="rightbar__following-name">
                  {friend.username}
                </span>
              </div>
            </Link>
          ))}
        </div>
        <h4 className="rightbar__title followers">Followers</h4>
        <div className="rightbar__followings">
          {followers.map((f) => (
            <Link
              key={f._id}
              to={`/profile/${f.username}`}
              style={{ textDecoration: "none", color: "black" }}
            >
              <div className="rightbar__following">
                <img
                  src={
                    f.profilePicture
                      ? PF + f.profilePicture
                      : PF + "person/noAvatar.png"
                  }
                  alt="friend"
                  className="rightbar__following-image"
                />
                <span className="rightbar__following-name">{f.username}</span>
              </div>
            </Link>
          ))}
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
