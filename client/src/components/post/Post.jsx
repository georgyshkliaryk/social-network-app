import "./Post.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import { format } from "timeago.js";
import { Link } from "react-router-dom";

function Post({ post }) {
  const [like, setLike] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(false);
  let [color, setColor] = useState(post.likes.length);
  const [user, setUser] = useState({});

  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/users?userId=${post.userId}`);
      setUser(res.data);
    };

    fetchUser();
  }, [post.userId]);

  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setColor(isLiked ? (color = "black") : (color = "red"));
    setIsLiked(!isLiked);
  };
  return (
    <div className="post__container">
      <div className="post__wrapper">
        <div className="post__top">
          <div className="post__top-left">
            <Link to={`profile/${user.username}`}>
              <img
                className="post__profile-image"
                src={user.profilePicture || "/assets/person/noAvatar.png"}
                alt="post profile"
              />
            </Link>
            <Link to={`profile/${user.username}`} style={{textDecoration: "none", color: "black"}}>
              <span className="post__username">{user.username}</span>
            </Link>
            <span className="post__date">{format(post.createdAt)}</span>
          </div>
          <div className="post__top-right">
            <span className="material-icons">more_vert</span>
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
