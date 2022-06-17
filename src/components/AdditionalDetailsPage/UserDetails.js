import React from 'react'
import styled from 'styled-components'

// background image
import backgroundImg from '../../img/luke-chesser-3rWagdKBF7U-unsplash.jpg'

export default function UserDetails() {
  return (
      <>
        <UserDetailsStyle>

            <div className="userDetailsWrapper">

                <form action="" className="UserDetailsForm" onSubmit="/* TODO HERE */">

                    <h2 className="formTitle">Additional Details Form</h2>
                    <p>Dear customer you are required to fill in the form to proceed</p>

                    <div className="inputWrapper">
                        <input
                            type="text" 
                            className="input"
                        />
                        <label className="label">Prefered Name </label>
                    </div>

                    <div className="inputWrapper">
                        <input 
                            type="text" 
                            className="input" 
                        />
                        <label className="label">Company's Name </label>
                    </div>

                    <div className="inputWrapper">
                        <input 
                            type="text" 
                            className="input" 
                        />
                        <label className="label">Years of Experience </label>
                    </div>

                    <div className="inputWrapper">
                        <input 
                            type="text" 
                            className="input" 
                        />
                        <label className="label">Industry or Study Field </label>
                    </div>

                    <div className="inputWrapper">
                        <input 
                            type="text" 
                            className="input" 
                        />
                        <label className="label">Occupation </label>
                    </div>

                    <div className="inputWrapper">
                        <input 
                            type="text" 
                            className="input" 
                        />
                        <label className="label">Country of Origin </label>
                    </div>

                    <div className="inputWrapper">
                        <input 
                            type="text" 
                            className="input" 
                        />
                        <label className="label">Interested skills to learn from our webinar </label>
                    </div>

                    <div className="inputWrapper">
                        <input 
                            type="text" 
                            className="input" 
                        />
                        <label className="label">Amount of push notification preferred</label>
                    </div>

                    <div className="inputWrapper">
                        <input 
                            type="text" 
                            className="input" 
                        />
                        <label className="label">Prefered platform e.g. Ms Teams or Email etc</label>
                    </div>

                    <button className="submitButton" onSubmit="">Submit</button>

                </form>
            </div>
        </UserDetailsStyle>
      </>
  )
}

const UserDetailsStyle = styled.div`

    box-sizing: border-box;
    margin: 0;
    padding: 0;
    background-color: #FFF;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

    .userDetailsWrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 110vh;

        background-image: url(${backgroundImg});
        background-size:  contain;
        background-position: center;
    }

    .UserDetailsForm {
        background-color: #FFF;
        width: 500px;
        border-radius: 10px;
        padding: 20px 40px;
        box-shadow: 0 10px 25px rgba(92, 99, 105, .2);
    }

    .formTitle {
        font-size: 40px;
        margin-bottom: 5px;
        color: purple;
    }

    .inputWrapper {
        position: relative;
        height: 40px;
        width: 90%;
        margin-bottom: 15px;
    }

    .input {
        position: absolute;
        background: none;
        outline: none;

        top: 0px;
        left: 0px;
        height: 100%;
        width: 100%;

        border: 1px solid #DADCE0;
        border-radius: 50px;
        font-size: 14px;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        text-align: center;
        padding: 0 20px;
        z-index: 1;

        :focus + .label {
            top: -7px;
            left: 6px;
            z-index: 10;
            font-size: 10px;
            font-weight: bold;
            color: purple;

            border: 1px solid #000000;
            border-radius: 50px;
        }

        :hover {
            border: 1px solid #000000;
        }

    }

    .label {
        position: absolute;
        top: 9px;
        left: 20px;
        padding: 0 4px;
        background-color: #FFF;
        color: #DADCE0;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-weight: bold;
        transition: 0.5s;
        z-index: 0;

    }

    .submitButton {
        width: 50%;
        margin-left: 120px;
        margin-top: 10px;
        padding: 10px 30px;
        border-radius: 50px;
        border-style: none;

        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-weight: bold;
        font-size: 20px;

        background-color: purple;
        color: #FFF;
        cursor: pointer;

        :hover {
            background-color: #000000;
            color: cyan;
            transition: ease-in-out 0.1s;
        }
    }
`
