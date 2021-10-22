import "./Post.scss";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { format } from "timeago.js";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

function Post({ post }) {
  const [like, setLike] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(false);
  let [color, setColor] = useState(post.likes.length);
  const [modal, setModal] = useState("none");
  const [modalColor, setModalColor] = useState("white");
  const [user, setUser] = useState({});
  const { user: currentUser } = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  useEffect(() => {
    setIsLiked(post.likes.includes(currentUser._id));
  }, [currentUser._id, post.likes]);

  useEffect(() => {
    setColor(
      post.likes.includes(currentUser._id) ? (color = "red") : (color = "black")
    );
  }, [currentUser._id, post.likes]);

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/users?userId=${post.userId}`);
      setUser(res.data);
    };

    fetchUser();
  }, [post.userId]);

  const likeHandler = () => {
    try {
      axios.put("/posts/" + post._id + "/like", { userId: currentUser._id });
    } catch (err) {
      console.log(err);
    }
    setLike(isLiked ? like - 1 : like + 1);
    setColor(isLiked ? (color = "black") : (color = "red"));
    setIsLiked(!isLiked);
  };

  const handleModalClick = () => {
    modal == "block" ? setModal("none") : setModal("block");
    modal == "block"
      ? setModalColor("white")
      : setModalColor("rgb(219, 219, 219)");
  };

  const handleDeletePost = async (e) => {
    e.preventDefault();
    try {
      const data = {
        userId: currentUser._id,
      };
      await axios.delete("/posts/" + post._id, { data });
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="post__container">
      <div className="post__wrapper">
        <div className="post__top">
          <div className="post__top-left">
            <Link to={`/profile/${user.username}`}>
              <img
                className="post__profile-image"
                src={
                  user.profilePicture
                    ? PF + user.profilePicture
                    : PF + "person/noAvatar.png"
                }
                alt="post profile"
              />
            </Link>
            <Link
              to={`/profile/${user.username}`}
              style={{ textDecoration: "none", color: "black" }}
            >
              <span className="post__username">{user.username}</span>
            </Link>
            <span className="post__date">{format(post.createdAt)}</span>
          </div>
          <div className="post__top-right">
            {post.userId === currentUser._id && (
              <span
                className="material-icons post__top-right-icon"
                onClick={handleModalClick}
                style={{ backgroundColor: modalColor }}
              >
                more_vert
              </span>
            )}
            <div className="post__more-modal" style={{ display: modal }}>
              <div className="post__more-item">Edit post</div> <br />
              <div className="post__more-item" onClick={handleDeletePost}>
                Delete post
              </div>
            </div>
          </div>
        </div>
        <div className="post__center">
          <span className="post__text">{post?.desc}</span>
          <img className="post__image" src={PF + post.img} alt="" />
        </div>
        <div className="post__bottom">
          <div className="post__bottom-left">
            <span
              className="material-icons-outlined like noselect"
              onClick={likeHandler}
              style={{ color }}
            >
              favorite
            </span>
            <span className="post__like-counter">{like} people like it</span>
          </div>
          <div className="post__bottom-right">
            <span className="material-icons-outlined comment">notes</span>
            <span className="post__comment-text">{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
