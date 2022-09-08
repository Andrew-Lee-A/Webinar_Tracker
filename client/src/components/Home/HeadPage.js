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

                <div className="titleContainer">
                    <h2>CPD HUB</h2>
                    <h4>webinar tracker</h4>
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
    width: 100vw;
    height: 100vh;
    /* clip-path: polygon(0 100%, 0 0, 100% 0, 100% 85%); */
    /* background-image: url(${headImage});
    background-size: cover;
    background-repeat: no-repeat; */

    background: linear-gradient(to top, #295074 , #040A0E);

    
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

        /* border: 1px solid #FFF; */
    }
    
    .titleContainer {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        margin-top: 10vh;

        h2, h4 {
            font-weight: lighter;
    
            color: #FFF;
            /* border: 1px solid #FFF; */
            font-family: 'Krona One', sans-serif;
        }

        h2 {
            font-size: 2.9em;
        }
    }

    .buttonsContainer {
        display: flex;
        align-items: center;
        justify-content: center;

        margin-top: 10vh;
        margin-right: 20px;


        /* border: 1px solid #FFF; */
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
        
        font-family: 'Krona One', sans-serif;
        font-weight: bold;
        
        cursor: pointer;
        
        color: aqua;
    }
    
    .about, .services, .contact {

        font-family: 'Krona One', sans-serif;
        font-size: 12px;

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
        border: 1px solid #FFF;
        color: #fff;
        letter-spacing: 0.1em;
        color: white;
        transition: all ease 0.3s;
        /* font-family: 'Space Grotesk', sans-serif; */

        font-family: 'Krona One', sans-serif;
        font-weight: lighter;
        font-size: 20px;

        cursor: pointer;

        :hover {
            /* background-color: aqua; */
            border: 1px solid aqua;
            color: aqua;
            letter-spacing: 0.2em;
        }
    }
`
export default HeadPage;