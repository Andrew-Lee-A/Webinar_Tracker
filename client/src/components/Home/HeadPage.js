import styled from "styled-components";
import headImage from "../../img/cpd-hub.png"
import { Link } from 'react-router-dom';

function HeadPage () {
    return (
        <>
            <HeadPageStyle>
                <div className="navbarItems">
                    {/* <img className="babcock" src={Babcock} alt=""></img>
                    <span>CPD Hub</span> */}

                    <ul>
                        <div className="about">
                            <li className='about' href="">About us</li>
                        </div>
                        <div className="services">
                            <li className='services' href="">Services</li>
                        </div>
                        <div className="contact">
                            <li className='contact' href="">Contact</li>
                        </div>
                    </ul>
                </div>

                <div className="buttonsContainer">
                    <Link to="/login">
                        <button className='loginButton'>Login</button>
                    </Link>
                    
                    <Link to="/register">
                        <button className='signupButton'>Register</button>
                    </Link>
                </div>
            </HeadPageStyle>
        </>
    )
}

const HeadPageStyle = styled.div`

    margin: 0;
    padding: 0;
    width: 99.9%;
    height: 100vh;
    /* clip-path: polygon(0 100%, 0 0, 100% 0, 100% 85%); */
    background-image: url(${headImage});
    background-size: cover;
    background-repeat: no-repeat;

    span {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 2rem;
    }

    ul {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .navbarItems {
        padding: 30px 10px;
    }

    .buttonsContainer {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 44vh;
        margin-right: 20px;
    }

    .babcock {
        margin: 0px 20px;
    }

    span {
        margin-right: auto;
    }

    li {
        list-style: none;
        display: inline-block;
        padding: 0px 20px;
        transition:  0.3s ease 0s;
        cursor: pointer;
        font-family: 'Space Grotesk', sans-serif;
        font-weight: bold;
        
        color: aqua;
    }
    
    .about, .services, .contact {

        font-size: medium;
        font-family: 'Raleway', sans-serif;

        :hover {
            border-bottom: 1px solid #ccc;
            transition: ease-in 0.4s;
        }

    }

    .loginButton, .signupButton {
        margin-left: 20px;
        padding: 7px 40px;
        border: none;
        border-radius: 5px;
        background-color: transparent;
        border: 2px solid #000000;
        color: #fff;
        font-weight: lighter;
        letter-spacing: 0.1em;
        color: white;
        transition: all ease 0.3s;
        font-family: 'Space Grotesk', sans-serif;

        cursor: pointer;

        :hover {
            background-color: #000000;
            color: aqua;
            letter-spacing: 0.2em;
        }
    }

    


`
export default HeadPage;