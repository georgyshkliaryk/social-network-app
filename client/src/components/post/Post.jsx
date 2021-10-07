import "./Post.scss";
import { Users } from "../../dummyData";
import { useState } from "react";

function Post({ post }) {
  const [like, setLike] = useState(post.like);
  const [isLiked, setIsLiked] = useState(false);

  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  }
  return (
    <div className="post__container">
      <div className="post__wrapper">
        <div className="post__top">
          <div className="post__top-left">
            <img
              className="post__profile-image"
              src={Users.filter((u) => u.id === post?.userId)[0].profilePicture}
              alt="post profile"
            />
            <span className="post__username">
              {Users.filter((u) => u.id === post?.userId)[0].username}
            </span>
            <span className="post__date">{post.date}</span>
          </div>
          <div className="post__top-right">
            <span className="material-icons">more_vert</span>
          </div>
        </div>
        <div className="post__center">
          <span className="post__text">{post?.desc}</span>
          <img className="post__image" src={post.photo} alt="post" />
        </div>
        <div className="post__bottom">
          <div className="post__bottom-left">
            <img className="like__icon" src="/assets/heart.png" alt="like" onClick={likeHandler}/>
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
