import React from 'react'
import { useState } from 'react'
// styled-component
import styled from 'styled-components';
// Link
import { Link } from 'react-router-dom'
// imgs
import Home from '../UserProfilePage/UserProfileImages/home.png'
import Setting from '../UserProfilePage/UserProfileImages/skills.png'
import Logout from '../UserProfilePage/UserProfileImages/log-out.png'
import BGimg from '../UserProfilePage/UserProfileImages/circle-scatter.png'

export default function UserProfile() {

  /* handling the icons' names */
  const [HoverDashboard, setHoveringDashboard] = useState(false);
  const [HoverSetting, setHoveringSetting] = useState(false);
  const [HoverLogout, setHoveringLogout] = useState(false);

  const MouseOverHandlerOne = () => {
    setHoveringDashboard(true);
  }

  const MouseOverHandlerTwo = () => {
    setHoveringSetting(true);
  }

  const MouseOverHandlerThree = () => {
    setHoveringLogout(true);
  }
  
  const MouseOutHandlerOne = () => {
    setHoveringDashboard(false);
  }

  const MouseOutHandlerTwo = () => {
    setHoveringSetting(false);
  }

  const MouseOutHandlerThree = () => {
    setHoveringLogout(false);
  }

  // ============================================================ //
  
  return (
      <>
        <UserProfileStyle>
          <div className="userProfileContainer">

          <span></span>
          <span></span>
          <span></span>

              <div className="imagesContainer">

                <div className="dashboardContainer" onMouseOver={MouseOverHandlerOne} onMouseOut={MouseOutHandlerOne}>
                    <Link to="/dashboard">
                      <img 
                        src={Home} 
                        alt="" 
                      />
                    </Link>
                  {HoverDashboard && <label className='dashboard'>Dashboard</label>}
                </div>

                <div className="settingContainer" onMouseOver={MouseOverHandlerTwo} onMouseOut={MouseOutHandlerTwo}>
                  <Link to="/usersetting">
                    <img 
                    src={Setting} 
                    alt="" />
                  </Link>
                  {HoverSetting && <label className='setting'>Setting</label>}
                </div>

                <div className="logoutContainer" onMouseOver={MouseOverHandlerThree} onMouseOut={MouseOutHandlerThree}>
                  <Link to="/">
                    <img  
                      src={Logout} 
                      alt="">
                    </img>
                  </Link>
                  {HoverLogout && <label className='logout'>Logout</label> }
                </div>
              </div>

              <div className="userProfileDetailsContainer" >
                <div className="leftSide">
                    <h1>About Me</h1>
                    <div className="titleBorder"></div>

                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur dolore explicabo laborum eum officia quae accusantium dolorum. Nostrum ea sint cupiditate? A, repudiandae. Maxime sapiente perferendis, odio provident repellat nesciunt!</p>
                    <p>lorem ipsum</p>
                </div>

                <div className="rightSide">
                    <h1>Personal Information</h1>
                    <div className="titleBorder"></div>

                    <div className="userInfoContainer">
                      <div>
                        <h3>Full Name</h3>
                        <p>Jay Smith</p>
                      </div>

                      <div>
                        <h3>Date of Birth</h3>
                        <p>25/1/2022</p>
                      </div>

                      <div>
                        <h3>Age</h3>
                        <p>37</p>
                      </div>

                      <div>
                        <h3>Status</h3>
                        <p>Secret</p>
                      </div>

                      <div>
                        <h3>Home Address</h3>
                        <p>Auckland CBD</p>
                      </div>

                      <div>
                        <h3>Occupation</h3>
                        <p>Programmer</p>
                      </div>
                    </div>

                </div>
              </div>
          </div>
            
        </UserProfileStyle>
      </>
  )
}

const UserProfileStyle = styled.div`
    padding: 0;
    margin: 0;

    background-image: url(${BGimg});
    background-size: cover;
    background-repeat: no-repeat;


    h1 {
      color: #FFF;
    }

    h3 {
      color: crimson;
    }

    label {
      color: crimson;
    }

    p {
      font-family: 'Space Grotesk', sans-serif;
      color: #FFF;
    }

    .userProfileContainer {
      width: 100%;
      height: 100vh;
      
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      color: #F49F1C;
    }

    .imagesContainer {
      width: 50vh;
      height: 55px;
      border-radius: 50px;

      display: flex;
      align-items: center;
      justify-content: space-evenly;
      background-color: #FFF;

      border-bottom: 2px solid #FFF;

      img {
        width: 25px;
        height: 25px;
      }
    }

    .dashboardContainer, .settingContainer, .logoutContainer {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    .userProfileDetailsContainer {

      margin-top: 5vh;

      width: 120vh;
      height: 80vh;
      /* border: 1px solid crimson; */
      
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      
      .leftSide {
        padding: 20px 40px;
        border: 1px solid crimson;

        .titleBorder {
          border-bottom: 2px solid #FFF;
          width: 50vh;
          margin: -10px 0px 20px 0px; /* TOP, LEFT, BOTTOM, RIGHT */
        }

        span {
          font-weight: bold;
          color: #FFF;
        }
      }

      .rightSide {
        padding: 20px 40px;
        background: rgba(255, 255, 255, 0.08);

        .titleBorder {
          border-bottom: 2px solid #FFF;
          width: 50vh;
          margin: -10px 0px 0px 0px;
        }

        .titleBorderName {
          width: 50px;
          border-bottom: 1px solid #FFF;
        }

        .userInfoContainer {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          grid-auto-rows: minmax(120px, auto);
        }
      }
      
    }
`
