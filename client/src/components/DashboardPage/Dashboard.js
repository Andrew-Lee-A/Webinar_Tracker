import React from 'react'
// Link
import { Link } from 'react-router-dom';
// Styled component
import styled from "styled-components";

function Dashboard() {
  return (
    <>
        <DashboardStyle>
            <div className="sideMenu">
                <div className="upperContainer">
                    <h1>CPD Hub</h1>
                </div>

                <div className="bottomContainer">
                    <div className="menuComponents">
                        <p>Home</p>
                        <p>Dashboard</p>
                    </div>

                </div>
            </div>

            <div className="outerContainer">
                <div className="upperComponentsContainer">

                </div>
            </div>

            
        </DashboardStyle>
    </>
  )
}

const DashboardStyle = styled.div`
    margin: 0px;
    padding: 0px;

    width: 100%;
    height: 100vh;
    background: linear-gradient(to right, #295074 , #040A0E);

    .sideMenu {
        align-items: center;
        justify-content: center;

        width: 20vw;
        height: 100vh;
        margin-left: 30px;

        border-radius: 30px 30px;

        background: rgba(255, 255, 255, 0.03);
        backdrop-filter: blur(12px);

        .upperContainer, .bottomContainer {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }

        .upperContainer {
            height: 10vh;

        }

        .bottomContainer {
            height: 90vh;

            /* border: 1px solid #040A0E; */

            p {
                margin-bottom: 10px;
            }
        }
    }

`

export default Dashboard