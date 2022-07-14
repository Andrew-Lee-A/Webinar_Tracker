import React, { useState } from 'react'
import { Link } from 'react-router-dom'
// image
import LoginImg from '../../img/login/andrew-neel-cckf4TsHAuw-unsplash.jpg';
// styled components
import styled from 'styled-components'
// toast
import { reminder } from '../RegisterPage/QuickMessage';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
// Axios
import Axios from 'axios';

export default function Login() {

  const [data, setData] = useState({
    username: "",
    password: "",
  });

  const [touched, setTouched] = useState({});

  const confirmData = (object) => {
    const {username, password} = object;

    // TO DO 
    const urlAPI = ``;

    const api = Axios
      .get(urlAPI)
      .then((response) => response.data)
      .then((data) => (data.ok ? reminder("You have logged in successfully!" ,"success") : reminder("Username or password is incorrect, try again!" , "error")));
        toast.promise(api, {
        pending: "Loading. . . please wait",
        success: false,
        error: "Error occurs, please try again!",
      });
  }; 

  const onChange = (e) => {
    if (e.target.name === "IsAccepted") {
      setData({ ...data, [e.target.name]: e.target.checked });
    } else {
      setData({ ...data, [e.target.name]: e.target.value });
    }
  };


  const onFocus = (e) => {
    setTouched({ ...touched, [e.target.name]: true})
  }

  const onSubmit = (e) => {
    e.preventDefault();
    confirmData(data);
  }

  return (
      <>
          <LoginWrapperStyle>
            <div className="formContainer">
              
                <h2>Welcome to our login page</h2>
                <span>Glad seeing you here today ^_^</span>
                <form onSubmit={onSubmit} autoComplete="off">
                    <div>
                        <label className='usernameLabel' >Your Username</label><br/>
                        <input 
                          type="text" 
                          name='username'
                          value={data.username}
                          onChange={onChange} 
                          onFocus={onFocus}
                          autoComplete="off"
                        />
                    </div>
                    <div>
                        <label className='usernamePassword' >Your Password</label>
                        <br/>
                        <input  
                          className='passInput' 
                          type="password" 
                          name='password'
                          value={data.password}
                          onChange={onChange} 
                          onFocus={onFocus}
                          autoComplete="off" 
                        />
                    </div>
                    <p>
                        <button className='submitButton' id='sub_btn' type='submit'>Login</button>
                    </p>
                </form>
                        <Link to="/forgetpassword"><label className='right-label'>Forget Password</label></Link>
                <footer>
                    <p className='footerWrapper' >New to us? <Link  className='linkWrapper' to="/register">create an account</Link></p>
                </footer>
                {/* Test for getting to dashboard page  */}
                <footer>
                    {/* <button className='demolinkButton'>
                      <Link  className='demoLink' to="/dashboard">dashboard demo</Link>
                    </button> */}
                </footer>
            </div>
          </LoginWrapperStyle>
      </>
  )
}

const LoginWrapperStyle = styled.div`

  margin: 0px;
  padding: 0px;

  height: 100vh;
  width: 100vw;

  background-image: url(${LoginImg});
  background-size: cover;
  background-position: center;

  .formContainer {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
  }

  h2 {
    font-weight: bold;
    font-size: 45px;
    font-family: 'Space Grotesk', sans-serif;
    color: #FFF;
    margin-bottom: 1vh;
    margin-top: 1.5vh;

    :hover {
      color: darkgoldenrod;
    }
  }

  span {
    color: #FFF;
    font-family: 'Space Grotesk', sans-serif;
  }

  .footerWrapper {
  color: #FFF;
  font-size: 20px;
  font-weight: bold;
  }

  .linkWrapper {
  color: #FFF;
  font-weight: lighter;
  }

  .usernameLabel {
  margin-left: 90px;
  }

  .usernamePassword {
    margin-left: 90px;
    margin-top: 10px;
  }

  form {
    padding: 2rem;
    margin: 2rem 0 2rem 0;
  }

  p {
  font-family: 'Space Grotesk', sans-serif;
  }

  form label {
    float: left;
    font-size: .9rem;
    margin: 0;
    padding: 0;

    color: #FFF;
    font-weight: bold;
    font-family: 'Space Grotesk', sans-serif;
  }

  .right-label {
  float: right;
  cursor: pointer;

  color: #FFF;
  margin-bottom: 10px;

  font-family: 'Space Grotesk', sans-serif;
  }

  input {
    width: 18rem;

    padding: .3 rem;
    border-radius: 50px;
    height: 40px;
    outline: none;
    border: none;

    text-align: center;
  }

  Link {
  font-family: 'Space Grotesk', sans-serif;
  }

  .passInput {
    text-decoration: none;
    list-style: none;
    background-color: transparent;
    border: 2px solid #FFF;
    
  }

  #sub_btn {
  margin-top: 40px;

  display: block;
  width: 100%;
  height: 40px;
  padding: .3rem;
  border: none;
  background: darkgoldenrod;
  color: #fff;
  border-radius: 50px;
  cursor: pointer;
  font-weight: bold;
  font-family: 'Space Grotesk', sans-serif;

  :hover {
      background: teal;
      color: #000000;
      font-weight: bold;
      transition: all .5s;
  }
  }

  footer p {
    margin: 0;
    font-size: .9rem;
  }

`
