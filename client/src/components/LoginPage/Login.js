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

    // TO DO (to fetch the data from the server)
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

            <div className="headerTitleContainer">
                <h2>Welcome to our login page</h2>
                <span>Glad seeing you here today ^_^</span>
            </div>

            <div className="formContainer">
              
                <form onSubmit={onSubmit} autoComplete="off">
                    <div>
                        <label className='usernameLabel' >Your Username</label><br/>
                        <input
                          className='usernameInput'
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

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .headerTitleContainer {
      height: 20vh;

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
  }
    
  .formContainer {
      height: 80vh;
    
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
  }

  h2 {
    font-weight: bold;
    font-size: 45px;
    font-family: 'Raleway', sans-serif;
    color: #FFF;
    margin-top: 10vh;
    margin-bottom: 1vh;

    :hover {
      color: darkgoldenrod;
    }
  }

  span {
    color: #FFF;
    font-family: 'Space Grotesk', sans-serif;
    margin-bottom: 15vh;
  }

  .footerWrapper {
    color: #FFF;
    font-size: 18px;
    font-weight: bold;

    margin-bottom: 20vh;
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
    font-family: 'Space Grotesk', sans-serif;
  }

  Link {
    font-family: 'Space Grotesk', sans-serif;
  }

  .passInput, .usernameInput {
    text-decoration: none;
    list-style: none;
    background-color: #FFF;

    :focus {
      box-shadow: 0px 4px 5px 0px rgba(129,129,129,0.75);
      -webkit-box-shadow: 0px 4px 5px 0px rgba(129,129,129,0.75);
      -moz-box-shadow: 0px 4px 5px 0px rgba(129,129,129,0.75);

      border: 2px solid #000000;
    }
  }
  
  .submitButton {
    margin-top: 40px;
  
    width: 100%;
    height: 40px;
    padding: .3rem;
    background-color: goldenrod;
    color: #fff;
    border-radius: 50px;
    transition: 0.5s;
    cursor: pointer;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    border-style: none;
    outline-style: none;
    font-size: 12px;
  
    :hover {
        font-weight: bold;
        letter-spacing: 0.25em;
        transition: all 0.5s linear;
        outline-style: none;
        border-style: none;
        cursor: pointer;
        color: #FFF;
    }
  }

  footer p {
    margin: 0;
    font-size: .9rem;
  }

`
