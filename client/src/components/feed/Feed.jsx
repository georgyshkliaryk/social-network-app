import Post from "../post/Post";
import Share from "../share/Share";
import "./Feed.scss";

const Feed = () => {
    return (
        <div className="feed__container">
            <div className="feed__wrapper">
                <Share />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
            </div>
        </div>
    );
}

export default Feed;
