import "../login/Login.scss";
import { useRef, useContext, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

const Register = () => {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const history = useHistory();

  const [warning, setWarning] = useState("\xa0");

  const handleClick = async (e) => {
    e.preventDefault();
    if (passwordAgain.current.value !== password.current.value) {
      //passwordAgain.current.setCustomValidity("Passwords don't match!");
      setWarning("Passwords doent match!");
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      };
      try {
        await axios.post("/auth/register", user);
        setWarning("\xa0");
        history.push("/login");
      } catch (err) {
        setWarning("Username or Email is already taken!");
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
              onChange={() => {
                setWarning("\xa0");
              }}
            />
            <input
              type="text"
              placeholder="Email"
              type="email"
              className="login__input"
              ref={email}
              required
              onChange={() => {
                setWarning("\xa0");
              }}
            />
            <input
              type="text"
              placeholder="Password"
              type="password"
              className="login__input"
              ref={password}
              required
              minLength="6"
              onChange={() => {
                setWarning("\xa0");
              }}
            />
            <input
              type="text"
              placeholder="Repeat your password"
              type="password"
              className="login__input"
              ref={passwordAgain}
              required
              onChange={() => {
                setWarning("\xa0");
              }}
            />

            <button className="login__button" type="submit">
              Sign Up
            </button>
            <Link to="/login">
              <button className="login-register__button">
                Log into Account
              </button>
            </Link>
          </form>
          <span className="login__error">{warning}</span>
        </div>
      </div>
    </div>
  );
};

export default Register;
