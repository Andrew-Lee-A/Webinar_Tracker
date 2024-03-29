import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

// images
import backgroundImg from '../../img/AdditionalDetails/gradienta-bKESVqfxass-unsplash.jpg'
import nameIcon from '../../img/AdditionalDetails/preferedname.png'
import company from '../../img/AdditionalDetails/company.png'
import experience from '../../img/AdditionalDetails/experience.png'
import industry from '../../img/AdditionalDetails/industrial.png'
import occupation from '../../img/AdditionalDetails/occupation.png'
import country from '../../img/AdditionalDetails/country.png'
import skill from '../../img/AdditionalDetails/skill.png'
import total from '../../img/AdditionalDetails/platform.png'
import platform from '../../img/AdditionalDetails/amount.png'

/* JS file */
import { validation } from './ValidateForm'

const UserDetails = () => {

    const [values, setValues] = useState ({
        preferedname: "",
        thecompany: "",
        experience: "",
        field: "",
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
        // !TODO => To push the data to the database
        
    }
    
    const handleClick = (e) => {
        e.preventDefault();
        setErrors(validation(values));
    };

    console.log(values);

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
                            onKeyPress={(event) => {
                                if(!/[a-zA-Z ]/.test(event.key)) {
                                    event.preventDefault();
                                }
                            }}
                            required="yes"
                            type="text" 
                            className="input"
                            maxLength="32"
                            name='preferedname'
                            value={values.preferedname}
                            onChange={handleChange}
                        />
                        
                        <label className="label"> Prefered Name </label>
                    </div>
                    {errors.preferedname && <p className="error">{errors.preferedname}</p>}

                    <div className="inputWrapper">
                        <img src={company} alt="" />
                        <input
                            onKeyPress={(event) => {
                                if(!/[a-zA-Z ]/.test(event.key)) {
                                    event.preventDefault();
                                }
                            }}
                            required="yes"
                            maxLength="35"
                            spellCheck="true"
                            type="text" 
                            className="input"
                            name="thecompany"
                            value={values.thecompany}
                            onChange={handleChange}
                        />

                        <label className="label"> Company's Name </label>
                    </div>
                    {errors.thecompany && <p className="error">{errors.thecompany}</p>}

                    <div className="inputWrapper">
                        <img src={experience} alt="" />
                        <input
                            onKeyPress={(event) => {
                                if(!/[0-9]/.test(event.key)) {
                                    event.preventDefault();
                                }
                            }}
                            required="yes"
                            type="number"
                            min="0"
                            max="60"
                            className="input"
                            name="experience"
                            value={values.experience}
                            onChange={handleChange}
                        />

                        <label className="label"> Years of Experience </label>
                    </div>
                    {errors.experience && <p className="error">{errors.experience}</p>}

                    <div className="inputWrapperContainer">

                        <div className="inputWrapperIndustry">
                            <img src={industry} alt="" />
                            <input
                                required="yes"
                                type="text" 
                                className="input"
                                name="field"
                                value={values.field}
                                disabled="yes"
                            />

                            <label className="label"> Prefered Field </label>

                        </div>

                        <select id="Field" className="progLanguagesAndStudyFieldSelection" multiple={false} name='field'  value={values.field} onChange={handleChange} >
                            <option selected value="" disabled="yes" >Choose Field</option>
                            <option value="Civil Engineer">Civil Engineer</option>
                            <option value="Software Engineer">Software Engineer</option>
                            <option value="Electrical Engineer">Electrical Engineer</option>
                            <option value="Chemical Engineer">Chemical Engineer</option>
                            <option value="Mechanical Engineer">Mechanical Engineer</option>
                            <option value="Architectural Engineer">Architectural Engineer</option>
                        </select>

                    </div>
                    {errors.field && <p className="error">{errors.field}</p>}

                    <div className="inputWrapper">
                        <img src={occupation} alt="" />
                        <input
                            onKeyPress={(event) => {
                                if(!/[a-zA-Z ]/.test(event.key)) {
                                    event.preventDefault();
                                }
                            }}
                            required="yes"
                            type="text" 
                            className="input"
                            maxLength="32"
                            name='occupation'
                            spellCheck="true"
                            value={values.occupation}
                            onChange={handleChange}
                        />

                        <label className="label">Occupation </label>
                    </div>
                    {errors.occupation && <p className="error">{errors.occupation}</p>}

                    <div className="inputWrapper">
                        <img src={country} alt="" />
                        <input
                            onKeyPress={(event) => {
                                if(!/[a-zA-Z ]/.test(event.key)) {
                                    event.preventDefault();
                                }
                            }}
                            required="yes"
                            type="text" 
                            className="input"
                            maxLength="22" 
                            name='country'
                            spellCheck="true"
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
                                disabled="yes">
                            </input>
                            <label className="label">Programming Skill</label>
                            
                        </div>

                        <select id="programmingSkill" className="progLanguagesAndStudyFieldSelection" multiple={false} name='skill' value={values.skill} onChange={handleChange}>
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
                    {errors.skill && <p className="error">{errors.skill}</p>}

                    <div className="inputWrapperContainer">

                        <div className="inputWrapperTotal">
                            <img src={total} alt="" />
                            <input
                                required="yes"
                                type="text" 
                                className="input"
                                name='notification'
                                value={values.notification}
                                disabled="yes"
                            />
                            <label className="label">Push Notification</label>
                        </div>

                        <select id="programmingSkill" className="progLanguagesAndStudyFieldSelection" multiple={false} name='notification' value={values.notification} onChange={handleChange}>
                            <option selected value="" disabled="yes" >Type of Push</option>
                            <option value="Weekly">Weekly</option>
                            <option value="Fortnightly">Fortnightly (every 2 weeks)</option>
                            <option value="Monthly">Monthly</option>
                            <option value="Quarterly">Quarterly (every 3 months) </option>
                            <option value="Yearly">Yearly</option>
                        </select>
                    </div>
                    {errors.notification && <p className="error">{errors.notification}</p>}

                    <div className="inputWrapperContainer">

                        <div className="inputWrapperPlatform">
                            <img src={platform} alt="" />
                            <input
                                required="yes"
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
                        </select>
                    </div>
                    {errors.platform && <p className="error">{errors.platform}</p>}

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
    height: 147vh;
    /* width: 100vw; */
    background-image: url(${backgroundImg});
    background-size:  cover;
    background-position: center;

    .userDetailsWrapper {

        display: flex;
        justify-content: center;
        align-items: center;

    }

    .UserDetailsForm {

        margin-top: 50px;
        
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
        font-family: 'Josefin Sans', sans-serif;
    }

    .inputWrapper {
        position: relative;
        height: 40px;
        width: 90%;
        margin-bottom: 13px;
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
        color: #000000;
        font-family: 'Space Grotesk', sans-serif;
        font-size: 14px;
        text-align: left;
        text-indent: 30px;
        padding: 0 20px;
        z-index: 1;

        :focus + .label, :valid + .label {
            top: -7px;
            left: 50px;
            z-index: 10;
            font-size: 10px;
            font-weight: bold;
            color: purple;

            /* border: 1px solid #000000; */
            border-radius: 50px;
        }

        :hover {
            border: 1px solid #000000;
        }

    }

    .label {
        position: absolute;
        top: 12px;
        left: 44px;
        padding: 0 4px;
        background-color: #FFF;
        color: #DADCE0;
        font-family: 'Space Grotesk', sans-serif;
        font-size: 13px;
        transition: 0.5s;
        z-index: 0;
    }

    .submitButton {
        width: 50%;
        background-image: linear-gradient(to right, #2b5876 0%, #4e4376 50%, #2b5876 100%);
        margin: 10px;
        margin-left: 120px;
        letter-spacing: 0.1em;
        padding: 12px 55px;
        text-transform: uppercase;
        transition: 0.5s;
        background-size: 200% auto;
        color: #FFF;            
        box-shadow: 0 0 20px #EEE;
        border-radius: 10px;
        border-style: none;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-weight: 500%;
        font-size: 13px;

        :hover {
          background-position: right center; /* change the direction of the change here */
          letter-spacing: 0.25em;
          transform: scale(1.05);
          transition: ease-in-out 0.6s;
          color: #fff;
          text-decoration: none;
          cursor: pointer;
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

    input {
        font-family: 'Space Grotesk', sans-serif;
        font-size: 13px;
    }

    option {
        font-family: 'Space Grotesk', sans-serif;
        font-size: 13px;
        color: #000000;
        font-weight: bold;
    }

`

export default UserDetails;