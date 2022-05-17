import React from 'react'
import { Link } from 'react-router-dom'

// image
import LoginImg from '../../img/login/andrew-neel-cckf4TsHAuw-unsplash.jpg';

// styled components
import styled from 'styled-components'

export default function Login() {
  return (
      <>
        <LoginStyle>
                <div className='loginContainer'>
                    <h2>Customer log in</h2>
                    <form action="/home">
                        <p>
                            <label className='usernameLabel' >Username or Email Address</label><br/>
                            <input type="text" name='firstName' required/>
                        </p>
                        <p>
                            <label className='usernamePassword' >Password</label>
                            <br/>
                            <input  className='passInput' type="password" name='password' required />
                        </p>
                        <p>
                            <button className='submitButton' id='sub_btn' type='submit'>Login</button>
                        </p>
                    </form>
                            <Link to="/forgetpassword"><label className='right-label'>Forget Password</label></Link>
                    <footer>
                        <p className='footerWrapper' >New to us? <Link  className='linkWrapper' to="/register">Create an account</Link>.</p>
                    </footer>
                </div>
        </LoginStyle>
      </>
  )
}

const LoginStyle = styled.div`
    
    margin: -10px;
    padding: 0;
    height: 697px;

    background-image: url(${LoginImg});
    background-size: cover;
    background-position: center;
    /* filter: blur(5px); */

    .loginContainer{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  
  h2 {
      font-weight: bold;
      font-size: 45px;
      font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
      color: #FFF;
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
    margin-left: 60px;
  }

  .usernamePassword {
    margin-left: 120px;
  }
  

  form {
      display: inline-block; 
      /* background-color: #f3f3f3; */
      /* border: 1px solid #ddd; */
      /* border-radius: 2px; */
      padding: 2rem;
      margin: 2rem 0 1rem 0;
  }

  form label {
      float: left;
      font-size: .9rem;
      margin: 0;
      padding: 0;

      color: #FFF;
      font-weight: bold;
  }

  .right-label {
    float: right;
    cursor: pointer;

    color: #FFF;
    margin-bottom: 10px;
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
    /* background-color: transparent; */
    color: #fff;
    border-radius: 50px;
    cursor: pointer;
    font-weight: bold;

    :hover {
        background: #FFF;
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
