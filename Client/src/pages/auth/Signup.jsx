import React from "react";
import { Link } from "react-router-dom";
import './signup.css'
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Axios from "axios";
import { useForm } from "react-hook-form";
import { apiDomain } from "../../utils/utilsDomain";
const Signup = () => {
 
  const navigate = useNavigate();

  const schema = yup.object().shape({

  email: yup.string().required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "Password must contain at least 8 characters, one letter, one number, and one special character"
    ),
});


const { register, handleSubmit, formState: { errors } } = useForm({
  resolver: yupResolver(schema),
});
const onSubmit = (data) => {
  console.log(data)
  Axios.post(apiDomain + "/auth/signup", data)
    .then((response) => {
      response.data.message && alert(response.data.message)
      navigate("/auth/login")
    })
    .catch((error) => {
      console.log(error);
    })
}

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
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* <h2>Dont Have an Account?</h2> */}
          <h1 className="font-bold text-2xl">Register Here</h1>
          <div>
            <label>Email</label>
            <input
              type="text"
              className="text-input" required="required"  {...register("email")}
              placeholder="Enter your Email"
            />
          </div>
          <p className="error">{errors.email?.message}</p>
          <div>
            <label>Password</label>
            <input
              type="password"
              className="text-input" required="required"   {...register("password")}
              placeholder="password"
            />
          </div>
          <p className="error" style={{color:"red"}} >{errors.password?.message}</p>
          <div>
            <label>Confirm Password</label>
            <input
              type="password"
              className="text-input" required="required"   {...register("confirmpassword")} 
              placeholder= "********"
            />
          </div>
          <p>{errors.confirmpassword?.message}</p>
          <div className="btn_wrapper">
          <button className="secondary-btn">Sign Up</button>
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
