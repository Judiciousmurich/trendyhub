import { Link } from "react-router-dom";
import './login.css'
import { useContext } from 'react';
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup"
import Axios from "axios";
import { Context } from "../../../src/context/Context";
import { apiDomain } from '../../utils/utilsDomain';
import { useNavigate } from 'react-router-dom';

const Login = () => {
 
  const { dispatch } = useContext(Context);
  const navigate = useNavigate();
  const schema = yup.object().shape({
    username: yup.string().required("Username is required"),
    password: yup.string().required("Password is required"),
  });
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    Axios.post(apiDomain + "auth/login", data)
      .then(({data}) => {
        // console.log(data);
        if (data.token) {
          dispatch({ type: "LOGIN_SUCCESS", payload: data.token });
          localStorage.setItem("user", JSON.stringify(data.token));
          navigate('/')
        }
      })
      .catch(({ response }) => {
        console.log(response);
        alert(response.data.error);
      });
  };

  return (
    <div id="wrapper">
      <div id="left">
        <div id="signin">
          <div className="logo">
          <Link to="/">TrendyHub </Link>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
          
          
            <div>
              <label>Email</label>
              <input
                type="text"
                className="text-input" required="required"  {...register("email")}
                placeholder="name@gmail.com"
              />
            </div>
            <p className="error">{errors.email?.message}</p>
            <div>
              <label>Password</label>
              <input
                type="password"
                className="text-input" required {...register("password")}
                placeholder="enter your pasword"
              />
            </div>
            <p>{errors.password?.message}</p>
            <Link to="/auth/signup"  type="submit" className="btn primary-btn">Login</Link>
          </form>
          <div className="links">
          <Link to="#">Forgot Password </Link>
          </div>
          <div className="or">
            <hr className="bar" />
            <span>OR</span>
            <hr className="bar" />
          </div>
          <Link to="/auth/signup" className="secondary-btn">
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
            <Link to="/auth/signup" className="secondary-btn">
            Signup Here
          </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
