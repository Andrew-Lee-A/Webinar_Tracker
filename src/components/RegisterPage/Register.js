import React from "react";
import { Link } from 'react-router-dom';

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

    .registerContainer {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    form {
        display: inline-block;
        background-color: #f3f3f3;
        border: 1px solid #ddd;
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
