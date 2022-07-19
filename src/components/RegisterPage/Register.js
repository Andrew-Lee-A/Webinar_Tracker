import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
// image
import RegisterImg from '../RegisterPage/RegisterImages/kelly-sikkema-tk9RQCq5eQo-unsplash.jpg';
import username from '../RegisterPage/RegisterImages/user.png'
import email from '../RegisterPage/RegisterImages/mail.png'
import pwd from '../RegisterPage/RegisterImages/lock.png'
import confirmpwd from '../RegisterPage/RegisterImages/reset-password.png'
// styled-components
import styled from "styled-components";
// import "react-toastify/dist/ReactToastify.css";
import styles from './Register.module.css'
// JavaScript files
import { validate } from "./Validate";
import { reminder } from "./QuickMessage";
// Toast folder and react-toastify
import { ToastContainer, toast } from "react-toastify";
// Axios
import Axios from "axios";

const Register = () => {

    const [data, setData] = useState ({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        IsAccepted: false,
    })

    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});

    useEffect(() => {
        setErrors(validate(data, "register"));
    }, [data, touched]);

    const handleChange = (event) => {
        if (event.target.name === "isAccepted") {

            setData({ 
                ...data, [event.target.name]: event.target.checked 
            });
        } else {
            setData({ 
                ...data, [event.target.name]: event.target.value
            });
        }
    };

    const handleFocus = (event) => {
        setTouched({ ...touched, [event.target.name]: true });
    }

    const onSubmit = (event) => {   
        event.preventDefault();

        if(!Object.keys(errors).length) { /* if there is no errros */

            // Code to push the data to the database
            const api = ``;

            const sendData = async () => {
                const apiResponse = Axios.get(api);
                const responseTypes = await toast.promise(apiResponse, {
                    pending: "We are processing your data...",
                    success: "Successfully created!",
                    error: "Whooops...your data is invalid!",
                });

                if (responseTypes.data.ok) {
                    reminder("Congratulation your account is created succesfully!", "success");
                } else {
                    reminder("Your account is already exist!", "warning");
                }
            };

            sendData();

        } else { /* if errors detected */
            reminder("The registration form is not yet completed, please check it again!", "error");
            setTouched({
                name: true,
                email: true,
                password: true,
                confirmPassword: true,
                IsAccepted: false,
            });
        }
    }

    /* handles the visibility of the password and confirm password input */
    
    return (
        <>
            <RegisterStyle>

                <div className="registerContainer">
                    <h2>Come and join us</h2>
                    <h5>Create your account now!</h5>

                    <form  className={styles.formLogin} onSubmit={onSubmit} autoComplete="off">

                        <div className="inputContainer">

                            <div>
                                <div className={errors.name && touched.name ? styles.invalidSign : !errors.name && touched.name ? styles.validSign : undefined} >

                                    <img src={username} alt="" className="usernameImg"/>
                                    <input  
                                        className="username"  
                                        placeholder="Your Username" 
                                        type="text" 
                                        name="name"
                                        value={data.name}
                                        onChange={handleChange}
                                        onFocus={handleFocus}
                                        autoComplete="off"
                                    >

                                    </input>
                                </div>
                                {errors.name && touched.name && <span className={styles.error}>{errors.name}</span>}
                            </div>

                            <div> 
                                <div className={errors.email && touched.email ? styles.invalidSign : !errors.email && touched.email ? styles.validSign : undefined} >

                                     <img src={email} alt="" className="emailImg"/>

                                    <input 
                                        className="emailAddress"  
                                        placeholder="Your Email" 
                                        type="text" 
                                        name="email"
                                        value={data.email}
                                        onChange={handleChange}
                                        onFocus={handleFocus}
                                        autoComplete="off"
                                    />
                                </div>
                                {errors.email && touched.email && <span className={styles.error}>{errors.email}</span>}
                            </div>
                        
                            <div>
                                <div className={errors.password && touched.password ? styles.invalidSign : !errors.password && touched.password ? styles.validSign : undefined} >

                                     <img src={pwd} alt="" />

                                    <input 
                                        className="password"  
                                        placeholder="Your Password" 
                                        type="password"
                                        id="pass" 
                                        name="password"
                                        value={data.password}
                                        onChange={handleChange}
                                        onFocus={handleFocus}
                                        autoComplete="off"
                                    />
                                </div>
                                {errors.password && touched.password && <span className={styles.error}>{errors.password}</span>}
                            </div>

                            <div>
                                <div className={errors.confirmPassword && touched.confirmPassword ? styles.invalidSign : !errors.confirmPassword && touched.confirmPassword ? styles.validSign : undefined}>

                                    <img src={confirmpwd} alt="" />

                                    <input 
                                        className="password"  
                                        placeholder="Re-type your password" 
                                        type="password"
                                        id="pass"
                                        name="confirmPassword"
                                        value={data.confirmPassword}
                                        onChange={handleChange}
                                        onFocus={handleFocus}
                                        autoComplete="off"
                                    />
                                </div>
                                {errors.confirmPassword && touched.confirmPassword && <span className={styles.error}>{errors.confirmPassword}</span>}
                            </div>
                            
                            <div>
                                <div>
                                    <input 
                                        type="checkbox" 
                                        name="checkbox" 
                                        id="checkbox" 
                                    /> 
                                    
                                    <span>I agree to all statement in <a href="https://google.com" target="_blank" rel="noopener noreferrer">terms of service</a> </span>
                                </div>
                            </div>

                            <div>
                                <div>
                                    <button className="registerButton" id="sub_btn" type="submit">Register</button>
                                </div>
                            </div>

                        </div>
                        
                    </form>

                    <ToastContainer />

                    <footer>
                        <p className="homepageLink"><Link to="/">Back to Homepage</Link></p>
                    </footer>
                </div>
                
            </RegisterStyle>
        </>
    );
}

// styled
const RegisterStyle = styled.div`
    margin: 0px;
    padding: 0px;

    background-image: url(${RegisterImg});
    background-size: cover;
    background-position: center;
    height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;

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
        font-family: 'Krona One', sans-serif;
        margin-bottom: 10px;

        margin-top: 35px;

        :hover {
            color: teal;
        }
    }

    H5 {
        color: white;
        margin-top: 5px;
        font-family: 'Krona One', sans-serif;

        :hover {
            color: teal;
        }
    }

    form {
        background-color: transparent;
        width: 400px;
        border-radius: 25px;
        padding: 20px 40px;
        box-shadow: 0 10px 25px rgba(92, 99, 105, 2);
        border: 1px solid #FFF;
    }

    input {

        outline: none;

        ::placeholder {
            font-weight: bold;
        }
    }
    
    span {
        color: #FFF;
    }

    a {
        color: #FFF;
        text-decoration: none;

        :hover {
            color: teal;
        }
    }

    .homepageLink {
        font-size: 20px;
        font-weight: bold;
    }

    .username {
        margin-right: 150px;
        margin-bottom: 20px;

        width: 100%;
        height: 40px;
        border-radius: 50px;
        border-style: none;
        border: 2px solid #000000;

        text-align: left;
        text-indent: 40px;

        :hover {
            border: 2px solid #fff;
        }
    }

    .emailAddress {
        margin-right: 150px;
        margin-bottom: 20px;

        width: 100%;
        height: 40px;
        border-radius: 50px;
        border-style: none;
        border: 2px solid #000000;

        text-align: left;
        text-indent: 40px;

        :hover {
            border: 2px solid #fff;
        }
    }

    .password {
        margin-right: 150px;
        margin-bottom: 20px;
        
        width: 100%;
        height: 40px;
        border-radius: 50px;
        border-style: none;
        border: 2px solid #000000;

        text-align: left;
        text-indent: 40px;

        :hover {
            border: 2px solid #fff;
        }
    }

    .registerButton {
        margin-top: 20px;
        margin-left: 6px;
        
        width: 18rem;
        height: 40px;
        border-radius: 5px;
        border: 2px solid #000000;

        background-color: #FFF;
        font-weight: 600;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

        :hover {
            background-color: #52796f;
            color: #FFF;
            cursor: pointer;

            border: 2px solid #52796f;
        }
    }

    #checkbox {
        width: 1rem;
    }

    form span {
        font-size: .8rem;
    }

    img {
        width: 25px;
        height: 25px;

        position: absolute;
        margin-top: 10px;
        margin-left: 10px;
    }

    .usernameImg {
        width: 22px;
        height: 22px;
        margin-left: 12px;
    }

    .emailImg {
        width: 22px;
        height: 22px;

        margin-left: 12px;
    }

`

export default Register;
