import React from 'react'
import styled from 'styled-components'

export default function UserSetting() {
  return (
    <>
        <UserSettingStyle>
            <div className="background">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>

                <Form>
                    <form className='form'>
                        <div className="formContainer">

                        </div>
                    </form>
                </Form>
            </div>

        </UserSettingStyle>
    </>
  )
}

const UserSettingStyle = styled.div`

    .background {
        position: fixed;
        width: 100vw;
        height: 100vh;
        top: 0;
        left: 0;
        background: #3E1E68;
        overflow: hidden;

        display: flex;
        align-items: center;
        justify-content: center;
    }

    .background span {
        width: 14vmin;
        height: 14vmin;
        border-radius: 14vmin;
        backface-visibility: hidden;
        position: absolute;
        animation: move;
        animation-duration: 29;
        animation-timing-function: linear;
        animation-iteration-count: infinite;
    }

    .background span:nth-child(0) {
        color: #FFACAC;
        top: 6%;
        left: 14%;
        animation-duration: 19s;
        animation-delay: -77s;
        transform-origin: 4vw -2vh;
        box-shadow: 28vmin 0 4.387010734264363vmin currentColor;
    }

    .background span:nth-child(1) {
        color: #E45A84;
        top: 49%;
        left: 23%;
        animation-duration: 32s;
        animation-delay: -57s;
        transform-origin: -19vw 15vh;
        box-shadow: -28vmin 0 3.5064203115044466vmin currentColor;
    }

    .background span:nth-child(2) {
        color: #E45A84;
        top: 77%;
        left: 14%;
        animation-duration: 90s;
        animation-delay: -198s;
        transform-origin: -4vw -16vh;
        box-shadow: -28vmin 0 3.7073627099990407vmin currentColor;
    }

    .background span:nth-child(3) {
        color: #E45A84;
        top: 13%;
        left: 8%;
        animation-duration: 115s;
        animation-delay: -206s;
        transform-origin: 7vw 1vh;
        box-shadow: 28vmin 0 3.550989417073249vmin currentColor;
    }

    .background span:nth-child(4) {
        color: #E45A84;
        top: 78%;
        left: 70%;
        animation-duration: 182s;
        animation-delay: -161s;
        transform-origin: 5vw -12vh;
        box-shadow: 28vmin 0 3.868470437186696vmin currentColor;
    }

    .background span:nth-child(5) {
        color: #E45A84;
        top: 13%;
        left: 72%;
        animation-duration: 117s;
        animation-delay: -23s;
        transform-origin: 19vw 9vh;
        box-shadow: -28vmin 0 3.8744997423586973vmin currentColor;
    }

    @keyframes move {
        100% {
            transform: translate3d(0, 0, 1px) rotate(360deg);
        }
    }

`

const Form = styled.div`
    height: 90vh;
    width: 80vw;
    background: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(14px);
    border-radius: 0.8rem;
`
