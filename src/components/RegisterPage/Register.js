import React from "react";
import { Link } from 'react-router-dom';

// image
import RegisterImg from '../../img/register/pexels-hasan-albari-1229861.jpg';

// styled-components
import styled from "styled-components";

const Register = () => {
    return (
        <>
            <RegisterStyle>

                <div className="registerContainer">
                    <h2>Come and join us</h2>
                    <h5>Create your account now!</h5>

                    <form action="/home">

                        <div className="inputContainer">

                            <p>
                                {/* <label>Username:</label> */}
                                <input  className="username"  placeholder="Your Username" type="text" name="firstname" required/>
                            </p>

                            <p>
                                {/* <label>Email Address:</label> */}
                                <input className="emailAddress"  placeholder="Your Email" type="email" name="email" required/>
                            </p>

                            <p>
                                {/* <label>Password:</label> */}
                                <input className="password"  placeholder="your password" type="password" name="password" required/>
                            </p>

                            <p>
                                <input type="checkbox" name="checkbox" id="checkbox" required/> <span>I agree to all statement in <a href="https://google.com" target="_blank" rel="noopener noreferrer">terms of service</a></span>
                            </p>

                            <p>
                                <button className="registerButton" id="sub_btn" type="submit">Register</button>
                            </p>

                        </div>
                        
                    </form>

                    <footer>
                        <p><Link to="/">Back to Homepage</Link>.</p>
                    </footer>
                </div>
                
            </RegisterStyle>
        </>
    );
}

// styled
const RegisterStyle = styled.div`
    margin: -8px;
    padding: 0px;

    background-image: url(${RegisterImg});
    background-size: cover;
    background-position: center;
    height: 696px;

    .registerContainer {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .inputContainer {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    h2 {
        color: #FFF;
        font-weight: bold;
        font-size: 50px;
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        margin-bottom: 10px;
    }

    H5 {
        color: white;
        margin-top: 20px;
    }

    form {
        background-color: transparent;
        width: 400px;
        border-radius: 25px;
        padding: 20px 40px;
        box-shadow: 0 10px 25px rgba(92, 99, 105, 2);
        border: 1px solid #FFF;
    }

    label {
        font-weight: bold;
    }

    span {
        color: #FFF;
    }

    a {
        color: #FFF;
    }

    .username {
        margin-right: 100px;
        
        width: 100%;
        height: 40px;
        border-radius: 50px;
        border-style: none;
        border: 2px solid #000000;

        text-align: center;
    }

    .emailAddress {
        margin-right: 100px;

        width: 100%;
        height: 40px;
        border-radius: 50px;
        border-style: none;
        border: 2px solid #000000;

        text-align: center;
    }

    .password {
        margin-right: 100px;
        
        width: 100%;
        height: 40px;
        border-radius: 50px;
        border-style: none;
        border: 2px solid #000000;

        text-align: center;
    }

    .registerButton {
        width: 16rem;
        height: 40px;
        border-radius: 50px;
        border: 2px solid #000000;

        background-color: #FFF;

        :hover {
            background-color: teal;
            color: #FFF;
            cursor: pointer;
        }
    }

    #checkbox {
        width: 1rem;
    }

    form span {
        font-size: .8rem;
    }

`

export default Register;
