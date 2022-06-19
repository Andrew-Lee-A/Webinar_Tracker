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

                    <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur dolore explicabo laborum eum officia quae accusantium dolorum. Nostrum ea sint cupiditate? A, repudiandae. Maxime sapiente perferendis, odio provident repellat nesciunt!</span>
                </div>

                <div className="rightSide">
                    <h1>Personal Information</h1>
                    <div className="titleBorder"></div>

                    <p>Full Name:</p>
                    <p>Date of Birth:</p>
                    <p>Age:</p>
                    <p>Status:</p>
                    <p>Home Address:</p>
                    <p>Occupation:</p>

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
    /* background-color: #101820FF; */

    background-image: url(${BGimg});
    background-size: cover;
    background-repeat: no-repeat;

    label {
      color: #317773;
      font-weight: bold;
    }

    h1 {
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

      width: 160vh;
      height: 80vh;
      // background-color: #FFF; /* WHITE COLOUR */
      color: #FEE715FF;

      display: flex;
      align-items: center;
      justify-content: space-between;

      .leftSide {
        padding: 0px 50px 20px 80px;
        margin-top: -16vh;

        /* border: 1px solid #000000; */

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
        padding: 20px 80px;
        
        .titleBorder {
          border-bottom: 2px solid #FFF;
          width: 50vh;
          margin: -10px 0px 0px 0px;
        }

        p {
          font-weight: bold;
          color: #FFF;
        }
      }
    }
`
