import React, { useState } from 'react'
import styled from 'styled-components'

// img
import BGimg from '../UserProfileImages/alex-bierwagen-5tW1ca0Zq18-unsplash.jpg'

export default function UserSetting() {

    /* set up the array of personal information */
    const [personalInformation, setPersonalInformation] = useState({
        fullname: "",
        dateofbirth: "",
        age: "",
        status: "",
        homeaddress: "",
        occupation: "",
    });

    /* only letters allowed when pressing the keyboards */
    const handleKeyPressLetters = (event) => {
        if(!/[a-zA-Z ]/.test(event.key)) {
            event.preventDefault();
        }
    }

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(personalInformation)
    }

    const onChange = (e) => {
        setPersonalInformation({
            ...personalInformation,
            [e.target.name]: e.target.value,
        })
    }

    /* to set the default date to the current date instead of showing the yyyy-mm-dd */
    const today = new Date();
    const numberOfDaysToAdd = 1; /* add 1 to match NZ date */
    const date = today.setDate(today.getDate() + numberOfDaysToAdd); 
    const defaultValue = new Date(date).toISOString().split('T')[0] // convert the date to ISO string
    // ================================================================= //

  return (
    <>
        <UserSettingStyle>
            <div className="background">
                <Form>
                    <form className='form' onSubmit={onSubmit}>
                        <div className="formContainer">

                            <div className="firstContainer">
                                <h3>Set up your personal information below:</h3>
                            </div>

                            <div className="secondContainer">
                                <label>Full name</label>
                                <label>Date of Birth</label>

                                {/* Full name */}
                                <input 
                                    type="text" 
                                    placeholder='E.g. James Holden'
                                    required="yes"
                                    maxLength="22"
                                    name='fullname'
                                    value={personalInformation.fullname}
                                    onChange={onChange}
                                    onKeyPress={handleKeyPressLetters}>
                                </input>

                                {/* Date */}
                                <input 
                                    type="Date"
                                    required="yes"
                                    max="2004-12-31" 
                                    min="1934-12-31"
                                    name='dateofbirth'
                                    value={personalInformation.dateOfBirth}
                                    onChange={onChange}
                                    defaultValue={defaultValue}>
                                </input>
                               
                            </div>

                            <div className="thirdContainer">
                                <label>Age</label>
                                <label>Status</label>

                                {/* Age */}
                                <input 
                                    type='number'
                                    placeholder='In between 15 and 70'
                                    required="yes"
                                    min="15" 
                                    max="70"
                                    name='age'
                                    value={personalInformation.age}
                                    onChange={onChange}
                                    >
                                </input>

                                {/* Status */}
                                <input
                                    type='text'
                                    placeholder='E.g. Single'
                                    required="yes"
                                    maxLength="15"
                                    name='status' 
                                    value={personalInformation.status}
                                    onChange={onChange}
                                    onKeyPress={handleKeyPressLetters}>
                                </input>

                            </div>

                            <div className="forthContainer">
                                <label>Home Address</label>
                                <label>Occupation</label>

                                {/* Home Address */}
                                <input 
                                    type='text'
                                    placeholder='E.g. 45 wild and young street, newmarket'
                                    required="yes"
                                    maxLength="35"
                                    name='homeaddress' 
                                    value={personalInformation.homeaddress}
                                    onChange={onChange}>
                                </input>

                                {/* occupation */}
                                <input 
                                    type='text'
                                    placeholder='E.g. Lawyer'
                                    required="yes"
                                    maxLength="30"
                                    name='occupation' 
                                    value={personalInformation.occupation}
                                    onChange={onChange}
                                    onKeyPress={handleKeyPressLetters}>
                                </input>

                            </div>

                            <div>
                                <button  
                                    className='submitButton' 
                                    type='submit'
                                    onKeyPress={handleKeyPressLetters}>
                                    Save Changes
                                </button>
                            </div>
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
        border: 1px solid crimson;
        background-color: transparent;
        border-radius: 5px;

        :hover {
            cursor: pointer;
            border: 1px solid #FF0000;
            color: #FF0000;
        }
    }

    input {
        border-radius: 5px;
        text-indent: 10px;
        outline-style: none;
        background: rgba(255, 255, 255, 0.1);
        border: rgba(255, 255, 255, 0.08);
        color: #fff;
        font-family: Verdana, Geneva, Tahoma, sans-serif;

        :hover {
            border: 1px solid #FFF;
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
        color: crimson;
    }
`
