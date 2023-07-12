import React from "react";
import { Link } from "react-router-dom";
import './signup.css'
import { useSelector } from "react-redux";
const Signup = () => {
  const {password:statePassword , email:stateEmail , confirmPassword:stateConfirmPassword} = useSelector((state) => state.user);
  return (
    <div className="signup">
      <div className="signup_image">
        <div>
          <h1>
            Already a Member? <strong>No Worries</strong>
          </h1>
          <Link to="/auth/login" className="secondary-btn">
            Login Here
          </Link>
        </div>
      </div>
      <div className="signup_form">
        <form>
          {/* <h2>Dont Have an Account?</h2> */}
          <h1>Register Here</h1>
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
          <div>
            <label>Confirm Password</label>
            <input
              type="password"
              className="text-input"
              placeholder= {stateConfirmPassword}
            />
          </div>
          <div className="btn_wrapper">
            <Link to="#" className="btn">
              Sign Up
            </Link>
          </div>

          <div className="or">
            <hr className="bar" />
            <span>OR</span>
            <hr className="bar" />
          </div>
          <div className="btn_wrapper">
            <Link to="/auth/login" className="secondary-btn">
              Sign In
            </Link>
          </div>

          <footer className="main-footer">
            <p>&copy; 2022, Realesto All Rights Reserved</p>
            <div>
              <Link to="/terms">Terms of use</Link> |{" "}
              <Link to="/policy">Privacy Policy</Link>
            </div>
          </footer>
        </form>
      </div>
    </div>
  );
};

export default Signup;
