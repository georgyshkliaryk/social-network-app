function Friends({ user }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <li className="sidebar__friend">
      <img
        src={PF + user.profilePicture}
        alt="friend"
        className="sidebar__friend__image"
      />
      <span className="sidebar__friend__name">{user.username}</span>
    </li>
  );
}

export default Friends;
