import Post from "../post/Post";
import Share from "../share/Share";
import "./Feed.scss";
import { useEffect, useState } from "react";
import axios from "axios";

const Feed = () => {
  const [posts, setPost] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("posts/timeline/616212dd8bbd3ebd2486d5cd");
      setPost(res.data);
    };

    fetchPosts();
  }, []);
  return (
    <div className="feed__container">
      <div className="feed__wrapper">
        <Share />
        {posts.map((p) => (
          <Post key={p._id} post={p} />
        ))}
      </div>
    </div>
  );
};

export default Feed;
