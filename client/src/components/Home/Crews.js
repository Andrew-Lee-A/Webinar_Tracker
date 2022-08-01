import styled from "styled-components";

// person images
import PersonOne from '../../img/person1.jpg'
import PersonTwo from '../../img/person2.jpg'
import PersonThree from '../../img/person3.jpg'
import PersonFour from '../../img/person4.jpg'
import PersonFive from '../../img/person5.jpg'
import PersonSix from '../../img/person6.jpg'

function Crew() {

    return (
        <>
            <CrewStyle>
                <div className="crewContainer">
                    <div className="crewHeader">
                        <h1>Get in touch with our lovely crews</h1>
                    </div>

                    <div className="crewWrapperOne">
                        <div className="crews">
                            <img className="imageOne" src={PersonOne} alt="" />
                            <h3>Oliva Scout</h3>
                            <div className="socialMediaIcons">
                                <img className="icons" src="" alt="" />
                                <img className="icons" src="" alt="" />
                                <img className="icons" src="" alt="" />
                            </div>
                        </div>
                        <div className="crews">
                            <img className="imageTwo" src={PersonTwo} alt="" />
                            <h3>Christian Lee</h3>
                            <div className="socialMediaIcons">
                                <img className="icons" src="" alt="" />
                                <img className="icons" src="" alt="" />
                                <img className="icons" src="" alt="" />
                            </div>
                        </div>
                        <div className="crews">
                            <img className="imageThree" src={PersonThree} alt="" />
                            <h3>Jayde Hub</h3>
                            <div className="socialMediaIcons">
                                <img className="icons" src="" alt="" />
                                <img className="icons" src="" alt="" />
                                <img className="icons" src="" alt="" />
                            </div>
                        </div>
                    
                    </div>
                    
                    <div className="crewWrapperTwo">
                        <div className="crews">
                            <img className="imageFour" src={PersonFour} alt="" />
                            <h3>Hayden Green</h3>
                            <div className="socialMediaIcons">
                                <img className="icons" src="" alt="" />
                                <img className="icons" src="" alt="" />
                                <img className="icons" src="" alt="" />
                            </div>
                        </div>
                        <div className="crews">
                            <img className="imageFive" src={PersonFive} alt="" />
                            <h3>Amelia Hey</h3>
                            <div className="socialMediaIcons">
                                <img className="icons" src="" alt="" />
                                <img className="icons" src="" alt="" />
                                <img className="icons" src="" alt="" />
                            </div>
                        </div>
                        <div className="crews">
                            <img className="imageSix" src={PersonSix} alt="" />
                            <h3>Brad Looper</h3>
                            <div className="socialMediaIcons">
                                <img className="icons" src="" alt="" />
                                <img className="icons" src="" alt="" />
                                <img className="icons" src="" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </CrewStyle>
        </>
    );
};

const CrewStyle = styled.div`
    margin: 0;
    padding: 0;
    width: 100%;
    height: 50rem;
    background-color: #000000;
    
    img {
        width: 40%;
        border-radius: 50%;
    }

    h3 {
        margin: 10px;
        padding: 10px;
    }

    .imageOne {
        width: 30%;
        margin-left: 100px;
    }

    .imageTwo {
        margin-right: 100px;
    }

    .imageThree {
        margin-right: 200px;
    }
    
    .imageFour {
        width: 20%;
    }

    .imageFive {
        width: 50%;
    }

    .imageSix {
        width: 20%;
    }

    h1 {
        display: flex;
        align-items: center;
        justify-content: center;
        color: darkgoldenrod;
        font-size: 60px;
        font-family: 'Beau Rivage', cursive;
    }

    .crewWrapperOne {
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 1s ease;
        color: white;
    }

    .crewWrapperTwo {
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 1s ease;
        color: white;
    }
    
    .crews {
        display: flex;
        flex-direction:column;
        align-items: center;
        justify-content: space;
    }

`

export default Crew;