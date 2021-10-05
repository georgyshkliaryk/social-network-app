import "./Post.scss";

const Post = () => {
  return (
    <div className="post__container">
      <div className="post__wrapper">
        <div className="post__top">
          <div className="post__top-left">
            <img
              className="post__profile-image"
              src="/assets/person/7.jpeg"
              alt="post profile"
            />
            <span className="post__username">My Name</span>
            <span className="post__date">5 min ago</span>
          </div>
          <div className="post__top-right">
            <span class="material-icons">more_vert</span>
          </div>
        </div>
        <div className="post__center">
          <span className="post__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
            commodi adipisci sint quae qui praesentium aliquam nesciunt
            doloremque voluptatum magni molestiae id impedit saepe unde ullam,
            fugit delectus dolor. Consectetur.
          </span>
          <img className="post__image" src="/assets/post/1.jpeg" alt="post" />
        </div>
        <div className="post__bottom">
          <div className="post__bottom-left">
            <img className="like__icon" src="/assets/heart.png" alt="like" />
            <span className="post__like-counter">24 people like it</span>
          </div>
          <div className="post__bottom-right">
            <span class="material-icons-outlined comment">notes</span>
            <span className="post__comment-text">11 comments</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
