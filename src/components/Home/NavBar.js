/* 
  Dependencies installed:
  1. npm install --save styled-components
  2. npm install --save react-router-dom
 */

// styled-components object
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Babcock from '../../img/approved (2).png'

function NavBar() {
  return (
    <>
      <NavBarContainerStyled>
          <div className="navbarItems">
            <img className="babcock" src={Babcock} alt=""></img>
            <span>CPD Hub</span>
            <ul>
              {/* <li className='about' href="">About</li>
              <li className='services' href="">Services</li>
              <li className='contact' href="">Contact</li> */}
            </ul>
            
            <Link to="/login">
              <button className='loginButton'>Login</button>
            </Link>
            
            <Link to="/register">
              <button className='signupButton'>Register</button>
            </Link>
          </div>
        </NavBarContainerStyled>
    </>
  );
}

const NavBarContainerStyled = styled.div`
  width: 100%;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  background-color: aliceblue;
  text-decoration: none;
  /* position: fixed;
  z-index: 1; */
  
  .navbarItems {
    display: flex;
    justify-content: flex-end;
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

    :hover {
      margin-top: 10px;
      color: darkorange;
      border-bottom: 2px darkgoldenrod solid;
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

export default NavBar;
