import "./Login.scss";
import { useRef, useContext, useState } from "react";
import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";

const Login = () => {
  const email = useRef();
  const password = useRef();
  const { user, isFetching, error, dispatch } = useContext(AuthContext);

  const [warning, setWarning] = useState("\xa0");

  const handleClick = async (e) => {
    e.preventDefault();
    await loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
    if (!user) {
      setWarning("Email or Password is incorrect! Please try again.");
    } else {
      setWarning("\xa0");
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
          <form className="login__box" onSubmit={handleClick}>
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
            <button
              className="login__button"
              type="submit"
              disabled={isFetching}
            >
              {isFetching ? (
                <span className="material-icons-outlined sync-icon">sync</span>
              ) : (
                "Log in"
              )}
            </button>
            <span className="login__forgot">
              Don't have an Account yet? Register Now!
            </span>
            <Link to="/register">
              <button className="login-register__button">
                {isFetching ? (
                  <span className="material-icons-outlined sync-icon">
                    sync
                  </span>
                ) : (
                  "Create new Account"
                )}
              </button>
            </Link>
          </form>
          <span className="login__error">{warning}</span>
        </div>
      </div>
    </div>
  );
};

export default Login;
