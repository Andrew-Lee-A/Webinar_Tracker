import React from 'react'
import { useState } from 'react'
// styled-component
import styled from 'styled-components';
// Link
import { Link } from 'react-router-dom'
// imgs
// import Home from '../UserProfilePage/UserProfileImages/home.png'
// import Setting from '../UserProfilePage/UserProfileImages/skills.png'
// import Logout from '../UserProfilePage/UserProfileImages/log-out.png'
import BGimg from '../UserProfilePage/UserProfileImages/circle-scatter.png'

export default function UserProfile() {

  return (
      <>
        <UserProfileStyle>
          <div className="userProfileContainer">

              <div className="nav">
                <input type="checkbox" />
                  <span/>

                <div className="menu">
                  <Link to="/dashboard">
                    <li>Dashboard</li>
                  </Link>
                  <Link to="/usersetting" >
                    <li>Setting</li>
                  </Link>
                  <Link to="/">
                    <li>Logout</li>
                  </Link>
                </div>
              </div>

              <div className="userProfileDetailsContainer" >
                <div className="leftSide">
                  
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

    .nav {
      display: flex;
      align-items: center;
      justify-content: center;

      margin: 0px 5px;
      padding: 10px;
      
      position: relative;
      background-color: #fff;
      transition: 0.5s;
      border-radius: 50px;
      overflow: hidden;
      box-shadow: 0 8px 15px rgba(0,0,0,.2);

      input {
        width: 40px;
        height: 30px;
        cursor: pointer;
        opacity: 0;
      }

      span {
        position: absolute;
        left: 18px;
        width: 30px;
        height: 5px;
        border-radius: 50px;
        pointer-events: none;
        transition: 0.5s;
        background: crimson;
      }

      .menu {
        margin: 0;
        padding: 0;
        width: 0;
        overflow: hidden;
        transition: 0.5s;

        display: flex;

        a {
          text-decoration: none;
          color: #161919;
        }
        
        li {
          list-style: none;
          margin: 0 8px;
          text-transform: uppercase;
          font-weight: 600;
          transition: 0.5s;
          
          :hover {
            color: #DC143C;
          }
        }
      }

      input:checked ~ .menu {
        width: 260px;
      }

      input:checked ~ span {
        background-color: green;
      } 
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
      width: 250px;
      height: 50px;
      padding: 0 1em;
      border-radius: 25px;
      /* border: 1px solid crimson; */

      display: flex;
      align-items: center;
      justify-content: space-around;
      background-color: #FFF;
      position: relative;
      box-shadow: 0 0 10px #202020;

      img {
        width: 20px;
        height: 20px;
      }
    }

    .dashboardContainer, .settingContainer, .logoutContainer {

      width: 30px;
      height: 30px;

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      :hover {
        width: 30px;
        height: 30px;
        border-radius: 50%;

        background-color: #C1C1C1
      }
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
