import "./OnlineFriends.scss";

function OnlineFriends({user})  {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    return (
           <li className="rightbar__friend">
            <div className="rightbar__profile-image__container">
              <img
                src={PF + user.profilePicture}
                className="rightbar__profile-image"
                alt="online friend"
              />
              <span className="rightbar__online"></span>
            </div>
            <span className="rightbar__username">{user.username}</span>
          </li> 
    );
}

export default OnlineFriends;
