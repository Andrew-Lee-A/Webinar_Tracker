import React from "react";
import { Link } from 'react-router-dom';

// image
import RegisterImg from '../../img/register/avel-chuklanov-DUmFLtMeAbQ-unsplash.jpg';

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
                        
                        <p>
                            <label>Username:</label>
                            <input  className="username" type="text" name="firstname" required/>
                        </p>

                        <p>
                            <label>Email Address:</label>
                            <input className="emailAddress" type="email" name="email" required/>
                        </p>

                        <p>
                            <label>Password:</label>
                            <input className="password" type="password" name="password" required/>
                        </p>

                        <p>
                            <input type="checkbox" name="checkbox" id="checkbox" required/> <span>I agree all statements in <a href="https://google.com" target="_blank" rel="noopener noreferrer">terms of service</a></span>
                        </p>

                        <p>
                            <button id="sub_btn" type="submit">Register</button>
                        </p>

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
    margin: -10px;
    padding: 0;

    

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

    h2 {
        color: #FFF;
        font-weight: bold;
        font-size: 45px;
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    }

    form {
        display: inline-block;
        background-color: transparent;
        border: 5px solid #000000;
        padding: 2rem;
    }
    
    label {
        font-weight: bold;
    }

    .username {
        margin-left: 2rem;
    }

    .emailAddress {
        margin-left: .5rem;
    }

    .password {
        margin-left: 2.3rem;
    }

    #checkbox {
        width: 1rem;
    }

    form span {
        font-size: .8rem;
    }

    #reset_pass_lbl {
        float: left;
    }
`

export default Register;
