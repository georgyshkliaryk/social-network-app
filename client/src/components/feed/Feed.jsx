import Post from "../post/Post";
import Share from "../share/Share";
import "./Feed.scss";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";

const Feed = ({ username }) => {
  const [posts, setPost] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = username
        ? await axios.get("/posts/profile/" + username)
        : await axios.get("/posts/timeline/" + user._id);
      setPost(
        res.data.sort((p1, p2) => {
          return new Date(p2.createdAt) - new Date(p1.createdAt);
        })
      );
    };

    fetchPosts();
  }, [username, user._id]);
  return (
    <div className="feed__container">
      <div className="feed__wrapper">
        {(!username || username === user.username) && <Share />}
        {(!username) ? <div className="feed__title">Your Feed</div> : (username === user.username) ? <div className="feed__title">Your Posts</div> : <div className="feed__title">{username}'s Posts</div>}
        {posts.map((p) => (
          <Post key={p._id} post={p} />
        ))}
      </div>
    </div>
  );
};

export default Feed;
