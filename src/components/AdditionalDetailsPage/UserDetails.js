import React, { useState } from 'react'
import styled from 'styled-components'

// background images
import backgroundImg from '../AdditionalDetailsPage/AdditionalDetailsImages/gradienta-bKESVqfxass-unsplash.jpg'
import nameIcon from '../AdditionalDetailsPage/AdditionalDetailsImages/preferedname.png'
import company from '../AdditionalDetailsPage/AdditionalDetailsImages/company.png'
import experience from '../AdditionalDetailsPage/AdditionalDetailsImages/experience.png'
import industry from '../AdditionalDetailsPage/AdditionalDetailsImages/industrial.png'
import occupation from '../AdditionalDetailsPage/AdditionalDetailsImages/occupation.png'
import country from '../AdditionalDetailsPage/AdditionalDetailsImages/country.png'
import skill from '../AdditionalDetailsPage/AdditionalDetailsImages/skill.png'
import total from '../AdditionalDetailsPage/AdditionalDetailsImages/platform.png'
import platform from '../AdditionalDetailsPage/AdditionalDetailsImages/amount.png'

/* JS file */
import { validation } from './ValidateForm'

const UserDetails = () => {

    const [values, setValues] = useState ({
        preferedname: "",
        thecompany: "",
        experience: "",
        field: '',
        occupation: "",
        country: "",
        skill: "",
        notification: "",
        platform: "",
    })
    
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (event) => {
        
    }
    
    const handleClick = (e) => {
        e.preventDefault();
        setErrors(validation(values))
    };

    return (
      <>
        <UserDetailsStyle>

            <div className="userDetailsWrapper">

                <form action="" className="UserDetailsForm" onSubmit={handleSubmit}>

                    <h2 className="formTitle">Additional Details Form</h2>
                    <p>Dear customer you are required to fill in the form to proceed</p>

                    <div className="inputWrapper">
                        <img src={nameIcon} alt="" />
                        <input  
                            type="text" 
                            className="input"
                            name='preferedname'
                            value={values.preferedname}
                            onChange={handleChange}
                        />
                        
                        <label className="label">Prefered Name </label>
                    </div>
                    {errors.preferedname && <p className="error">{errors.preferedname}</p>}

                    <div className="inputWrapper">
                        <img src={company} alt="" />
                        <input 
                            type="text" 
                            className="input"
                            name="thecompany"
                            value={values.thecompany}
                            onChange={handleChange}
                        />

                        <label className="label">Company's Name </label>
                    </div>
                    {errors.thecompany && <p className="error">{errors.thecompany}</p>}

                    <div className="inputWrapper">
                        <img src={experience} alt="" />
                        <input 
                            type="text" 
                            className="input"
                            name="experience"
                            value={values.experience}
                            onChange={handleChange}
                        />

                        <label className="label">Years of Experience </label>
                    </div>
                    {errors.experience && <p className="error">{errors.experience}</p>}

                    <div className="inputWrapperContainer">

                        <div className="inputWrapperIndustry">
                            <img src={industry} alt="" />
                            <input 
                                type="text" 
                                className="input"
                                name="field"
                                value={values.field}
                                disabled="yes"
                            />

                        <label className="label">{/* Industry or  */} Prefered Field </label>

                        </div>

                        <select id="Field" className="progLanguagesAndStudyFieldSelection" name='field' value={values.field} onChange={handleChange} >
                            <option selected value="" disabled="yes" >Choose Field</option>
                            <option value="Civil Engineer">Civil Engineer</option>
                            <option value="Software Engineer">Software Engineer</option>
                            <option value="Electrical Enginner">Electrical Engineer</option>
                            <option value="Chemical Enginner">Chemical Engineer</option>
                            <option value="Mechanical Enginner">Mechanical Engineer</option>
                        </select>

                    </div>

                    <div className="inputWrapper">
                        <img src={occupation} alt="" />
                        <input 
                            type="text" 
                            className="input"
                            name='occupation'
                            value={values.occupation}
                            onChange={handleChange}
                        />

                        <label className="label">Occupation </label>
                    </div>
                    {errors.occupation && <p className="error">{errors.occupation}</p>}

                    <div className="inputWrapper">
                        <img src={country} alt="" />
                        <input 
                            type="text" 
                            className="input" 
                            name='country'
                            value={values.country}
                            onChange={handleChange}
                        />

                        <label className="label">Country of Origin </label>
                    </div>
                    {errors.country && <p className="error">{errors.country}</p>}

                    <div className="inputWrapperContainer">

                        <div className="inputWrapperSkill">

                            <img src={skill} alt="" />
                            <input
                                type="text" 
                                className="input"
                                name='skill'
                                value= {values.skill}
                                disabled="yes"
                            >
                            </input>
                            <label className="label">Programming Skill</label>
                            
                        </div>

                        <select id="programmingSkill" className="progLanguagesAndStudyFieldSelection" name='skill' value={values.skill} onChange={handleChange}>
                            <option selected value="" disabled="yes" >Programming Languages</option>
                            <option value="Java">Java</option>
                            <option value="C">C</option>
                            <option value="C#">C#</option>
                            <option value="C++">C++</option>
                            <option value="JavaScript">JavaScript</option>
                            <option value="Python">Python</option>
                            <option value="Kotlin">Kotlin</option>
                            <option value="PHP">PHP</option>
                        </select>
                    </div>

                    <div className="inputWrapperContainer">

                        <div className="inputWrapperTotal">
                            <img src={total} alt="" />
                            <input 
                                type="text" 
                                className="input"
                                name='total'
                                value={values.total}
                                disabled="yes"
                            />
                            <label className="label">Push Notification</label>
                        </div>

                        <select id="programmingSkill" className="progLanguagesAndStudyFieldSelection" name='total' value={values.total} onChange={handleChange}>
                            <option selected value="" disabled="yes" >Choose Amount</option>
                            <option value="Weekly">Weekly</option>
                            <option value="Fortnightly">Fortnightly (every 2 weeks)</option>
                            <option value="Monthly">Monthly</option>
                            <option value="Quarterly">Quarterly (every 4 months) </option>
                            <option value="Yearly">Yearly</option>
                        </select>
                    </div>

                    <div className="inputWrapperContainer">

                        <div className="inputWrapperPlatform">
                            <img src={platform} alt="" />
                            <input
                                type="text" 
                                className="input"
                                name='platform'
                                value={values.platform}
                                disabled="yes"
                            />
                            <label className="label">Prefered platform</label>
                        </div>

                        <select id="programmingSkill" className="progLanguagesAndStudyFieldSelection" name='platform' value={values.platform} onChange={handleChange}>
                            <option selected value="" disabled="yes" >Choose Platform</option>
                            <option value="Microsoft Teams">Microsoft Teams</option>
                            <option value="Email">Email</option>
                            <option value="Slack">Slack</option>
                        </select>
                    </div>

                    <button className="submitButton" type='submit' onClick={handleClick} >Submit</button>

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
        height: 120vh;

        background-image: url(${backgroundImg});
        background-size:  cover;
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

    .inputWrapperContainer {
        display: grid;
        grid-template-columns: repeat(2, 1fr);

        .progLanguagesAndStudyFieldSelection {
            margin-bottom: 15px;
            width: 96%;
            border-radius: 50px;
            outline: none;
            text-decoration: none;
            border: 1px solid #D3D3D3;
            background: transparent;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            cursor: pointer;
            text-indent: 5px;

            :hover {
                border: 1px solid #000000;
            }

            option {
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                color: #000000;
            }
        }

        .inputWrapperSkill {
            position: relative;
            height: 40px;
            width: 80%;
            margin-bottom: 15px;
        }

        .inputWrapperIndustry {
            position: relative;
            height: 40px;
            width: 80%;
            margin-bottom: 15px;
        }

        .inputWrapperTotal {
            position: relative;
            height: 40px;
            width: 80%;
            margin-bottom: 15px;
        }

        .inputWrapperPlatform {
            position: relative;
            height: 40px;
            width: 80%;
            margin-bottom: 15px;
        }
    }
    
    .input {
        position: absolute;
        background: none;
        outline: none;

        top: 0px;
        left: 0px;
        height: 100%;
        width: 100%;

        border: 1px solid #D3D3D3;
        border-radius: 50px;
        font-size: 17px;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        /* font-weight: bold; */
        text-align: left;
        text-indent: 30px;
        padding: 0 20px;
        z-index: 1;

        :focus + .label {
            top: -7px;
            left: 50px;
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
        left: 44px;
        padding: 0 4px;
        background-color: #FFF;
        color: #DADCE0;
        /* color: #D3D3D3; */
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        /* font-weight: bold; */
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

    .error {
        font-size: 12px;
        color: red;
        margin-left: 7vh;
    }

    h2 {
        margin-top: 0px;
    }

    img {
        width: 25px;
        height: 25px;
        margin-left: 10px;
        margin-top: 8px;
    }
`

export default UserDetails;