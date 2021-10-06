import Post from "../post/Post";
import Share from "../share/Share";
import "./Feed.scss";
import { Posts } from "../../dummyData";

const Feed = () => {
    return (
        <div className="feed__container">
            <div className="feed__wrapper">
                <Share />
                {Posts.map(p => (
                    <Post key={p.id} post={p} />
                ))}
            </div>
        </div>
    );
}

export default Feed;
