import { Link } from "react-router-dom";
import './Login.css'
import { useSelector } from "react-redux";
const LoginForm = () => {
  const {password: statePassword, email:stateEmail} = useSelector((state) => state.user);

  return (
    <div id="wrapper">
      <div id="left">
        <div id="signin">
          <div className="logo">
            <a href="index.html">TrendyHub</a>
          </div>
          <form>
            <div>
              <label>Email</label>
              <input
                type="text"
                className="text-input"
                placeholder={stateEmail}
              />
            </div>
            <div>
              <label>Password</label>
              <input
                type="password"
                className="text-input"
                placeholder={statePassword}
              />
            </div>
            <Link to="/signup"  type="submit" className="btn primary-btn">Login</Link>
          </form>
          <div className="links">
          <Link to="#">Forgot Password </Link>
          </div>
          <div className="or">
            <hr className="bar" />
            <span>OR</span>
            <hr className="bar" />
          </div>
          <Link to="/signup" className="secondary-btn">
            Create an account
          </Link>
        </div>
        <footer id="main-footer">
          <p>Copyright &judicious; 2023, Trendyhub All Rights Reserved</p>
          <div>
          <Link to="/terms">Terms of Use</Link> |{" "}
        <Link to="/policy">Privacy Policy</Link>
          </div>
        </footer>
      </div>
      <div id="right">
        <div id="showcase">
          <div className="showcase-content">
            <h1 className="showcase-text">
              Not a Member Yet! <strong>No Worries</strong>
            </h1>
            <Link to="/signup" className="secondary-btn">
            Signup Here
          </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
