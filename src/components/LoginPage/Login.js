import React from 'react'
import { Link } from 'react-router-dom'

// styled components
import styled from 'styled-components'

export default function Login() {
  return (
      <>
        <LoginStyle>
            <div className='loginContainer'>
                <h2>Log in</h2>
                <form action="/home">
                    <p>
                        <label>Username or Email Address</label><br/>
                        <input type="text" name='firstName' required/>
                    </p>
                    <p>
                        <label>Password</label>
                        <Link to="/forgetpassword"><label className='right-label'>Forget Password</label></Link>
                        <br/>
                        <input type="password" name='password' required />
                    </p>
                    <p>
                        <button id='sub_btn' type='submit'>Login</button>
                    </p>
                </form>
                <footer>
                    <p>New to us? <Link to="/register">Create an account</Link>.</p>
                </footer>
            </div>
        </LoginStyle>
      </>
  )
}

const LoginStyle = styled.div`

  .loginContainer{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
  }
  
  h2 {
      font-weight: bold;
  }

  form {
      display: inline-block; 
      background-color: #f3f3f3;
      border: 1px solid #ddd;
      border-radius: 2px;
      padding: 2rem;
      margin: 2rem 0 1rem 0;
  }

  form label {
      float: left;
      font-size: .9rem;
      margin: 0;
      padding: 0;
  }

  .right-label {
    float: right;
    cursor: pointer;
  }

  input {
      width: 15rem;
      padding: .3 rem;
      border-radius: 5px;
      outline: none;
      border: none;
  }

  #sub_btn {
    display: block;
    width: 100%;
    padding: .3rem;
    border: none;
    background: #222;
    color: #fff;
    border-radius: 3px;

    :hover {
        background: #333;
        transition: all .5s;
    }
  }


  footer p {
      margin: 0;
      font-size: .9rem;
  }


`
