import "../login/Login.scss";
import { useRef, useContext } from "react";
import axios from "axios";
import { useHistory } from "react-router";

const Register = () => {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const history = useHistory();

  const handleClick = async (e) => {
    e.preventDefault();
    if (passwordAgain.current.value !== password.current.value) {
      passwordAgain.current.setCustomValidity("Passwords don't match!");
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      };
      try {
        await axios.post("/auth/register", user);
        history.push("/login");
      } catch (err) {
        console.log(err);
      }
    }
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
          <form className="register__box" onSubmit={handleClick}>
            <input
              type="text"
              placeholder="Username"
              className="login__input"
              ref={username}
              required
            />
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
            <input
              type="text"
              placeholder="Repeat your password"
              type="password"
              className="login__input"
              ref={passwordAgain}
              required
            />
            <button className="login__button" type="submit">
              Sign Up
            </button>
            <button className="login-register__button">Log into Account</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
