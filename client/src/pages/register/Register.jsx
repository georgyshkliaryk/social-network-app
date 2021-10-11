import "../login/Login.scss";

const Register = () => {
  return (
    <div className="login__container">
      <div className="login__wrapper">
        <div className="login__left">
          <h3 className="login__logo">gSocial</h3>
          <span className="login__desc">
            Connect with your friends and the world around you on gSocial.
          </span>
        </div>
        <div className="login__right">
          <div className="register__box">
            <input type="text" placeholder="Username" className="login__input" />
            <input type="text" placeholder="Email" type="email" className="login__input" />
            <input
              type="text"
              placeholder="Password"
              type="password"
              className="login__input"
            />
             <input type="text" placeholder="Repeat your password" type="password" className="login__input" />
            <button className="login__button">Sign Up</button>
            <button className="login-register__button">Log into Account</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
