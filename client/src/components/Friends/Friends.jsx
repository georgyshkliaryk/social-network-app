function Friends({ user }) {
  return (
    <li className="sidebar__friend">
      <img
        src={user.profilePicture}
        alt="friend"
        className="sidebar__friend__image"
      />
      <span className="sidebar__friend__name">{user.username}</span>
    </li>
  );
}

export default Friends;
