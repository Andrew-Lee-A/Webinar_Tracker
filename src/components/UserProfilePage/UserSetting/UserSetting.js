import React from 'react'
import styled from 'styled-components'

// img
import BGimg from '../UserProfileImages/kevin-kandlbinder-WrjxzLskZK0-unsplash.jpg'

export default function UserSetting() {

    const handleKeyPressLetters = () => {
    
    }

    const handleKeyPressNumbers = () => {
    
    }
    
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
                            <form>
                                <div className="firstContainer">
                                    <h3>Set up your personal information below:</h3>
                                </div>
                                <div className="secondContainer">
                                    <label>Full name</label>
                                    <label>Date of Birth</label>

                                    <input type='text' ></input>
                                    <input type='Date' ></input>
                                </div>

                                <div className="thirdContainer">
                                    <label>Age</label>
                                    <label>Status</label>

                                    <input type='text' ></input>
                                    <input type='text' ></input>
                                </div>

                                <div className="forthContainer">
                                    <label>Home Address</label>
                                    <label>Occupation</label>

                                    <input type='text' ></input>
                                    <input type='text' ></input>
                                </div>

                                <div>
                                    <button  className='submitButton' type='submit'>Send</button>
                                </div>
                            </form>
                            
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
        width: 100vw;
        height: 100vh;
       
        display: flex;
        align-items: center;
        justify-content: center;

        background-image: url(${BGimg});
        background-size: cover;
    }
`

const Form = styled.div`
    height: 90vh;
    width: 80vw;
    border-radius: 0.8rem;
    background: rgba(255, 255, 255, 0.08);
    
    .formContainer {
        padding: 50px 50px;
    }

    .secondContainer, .thirdContainer, .forthContainer {
        margin-bottom: 20px;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-auto-rows: minmax(40px, auto);
        column-gap: 40px;
    }
    
    .submitButton {
        margin-top: 10px;
        width: 10vw;
        height: 4vh;
        border: 1px solid magenta;
        background-color: transparent;
        border-radius: 5px;

        :hover {
            cursor: pointer;
            border: 1px solid yellow;
            color: yellow;
        }
    }

    input {
        border-radius: 5px;
        text-indent: 10px;
        outline-style: none;

        :hover {
            border: 3px solid blueviolet;
            border-radius: 5px;
        }
    }

    h3 {
        font-family: 'Space Grotesk', sans-serif;
        font-weight: 800;
        color: #FFF;
    }
    

    label, button {
        font-family: 'Space Grotesk', sans-serif;
        color: magenta;
    }
`
