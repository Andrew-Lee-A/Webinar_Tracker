import styled from "styled-components";
import headImage from "../../img/samantha-borges-EeS69TTPQ18-unsplash.jpg"
import Babcock from "../../img/approved (2).png"
import { Link } from 'react-router-dom';


function HeadPage () {
    return (
        <>
            <HeadPageStyle>
            <div className="navbarItems">
                <img className="babcock" src={Babcock} alt=""></img>
                <span>CPD Hub</span>

                <ul>
                    <li className='about' href="">About</li>
                    <li className='services' href="">Services</li>
                    <li className='contact' href="">Contact</li>
                </ul>
                
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
    height: 45rem;
    clip-path: polygon(0 100%, 0 0, 100% 0, 100% 85%);
    background-image: url(${headImage});
    background-size: cover;
    background-repeat: no-repeat;
    color: darkorange;

    .headMessage {
        font-size: 70px;
        font-weight: bold;
        padding: 40px;
        font-family: 'Beau Rivage', cursive;
    }
    
    span {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 2rem;
    }

    .navbarItems {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 30px 10px;
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
        transition: all 0.3s ease 0s;
        cursor: pointer;
        font-family: 'Space Grotesk', sans-serif;
        font-weight: bold;
        
        color: darkorange;

        :hover {
            margin-top: 10px;
            border-bottom: 2px black solid;
            border-width: 50%;
            transform-origin: left;
            transition: all 0.5s ease;
        }
        
    }

    .loginButton, .signupButton {
        margin-left: 20px;
        padding: 9px 50px;
        background-color: rgba(0, 0, 0, 2);
        border: none;
        border-radius: 50px;
        color: white;
        transition: all ease 0.3s ease 0s;

        cursor: pointer;

        :hover {
            color: darkorange;
        }
    }
`

export default HeadPage;