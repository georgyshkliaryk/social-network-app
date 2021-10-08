import "./Login.scss";

const Login = () => {
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
                    <div className="login__box">
                        <input type="text" placeholder="Email" className="login__input" />
                        <input type="text" placeholder="Password" className="login__input" />
                        <button className="login__button">Log in</button>
                        <span className="login__forgot">Forgot Password?</span>
                        <button className="login-register__button">Create new account</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
