import React from 'react'
// styled-component
import styled from 'styled-components';

// img
import UserAvatar from '../../img/Anonymous_emblem.svg.png'

export default function UserProfile() {
  return (
      <>
        <UserProfileStyle>
          <div className="userProfileContainer">

            {/* 1 */}
            <div className="SideMenu">
              <div className="userAvatar">
                    <img className='avatarImg' src={UserAvatar} alt="" />
              </div>

              <div className="bottomInfo">

              </div>

            </div>

            {/* 2 */}
            <div className="userContainer">

              <div className="userInfo">

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

    .userProfileContainer {
      width: 100%;
      height: 100vh;

      display: flex;
    }

    .SideMenu {
      width: 25%;
      height: 100vh;
      background-color: #0e387a;
      border-right: 1px solid #9fafca;
    }

    .userAvatar {
      display: flex;
      align-items: center;
      justify-content: center;

      height: 30vh;
      border-bottom: 1px solid #9fafca;
    }

    .avatarImg {
      width: 30%;
      height: 20vh;
    }

    .bottomInfo {
      height: 70vh;
    }

    /* =================================================== */

    .userContainer {
      width: 75%;
      height: 100vh;
      background-color: #030E4F;
    }

    .userInfo {
      
    }
`
