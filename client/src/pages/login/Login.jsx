import "./Login.scss";
import { useRef } from "react";

const Login = () => {
  const email = useRef();
  const password = useRef();

  const handleClick = (e) => {
    e.preventDefault();
    console.log(email.current.value);
  };
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
          <form className="login__box" onSubmit={handleClick}>
            <input
              type="text"
              placeholder="Email"
              type="email"
              className="login__input"
              ref={email}
              required
            />
            <input
              type="text"
              placeholder="Password"
              type="password"
              className="login__input"
              ref={password}
              required
              minLength="6"
            />
            <button className="login__button">Log in</button>
            <span className="login__forgot">Forgot Password?</span>
            <button className="login-register__button">
              Create new account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
