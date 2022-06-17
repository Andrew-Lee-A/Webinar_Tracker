import styled from "styled-components";

// webinar image
import Webinar from '../../img/webinarImageOne.jpg'

function Quality() {
    return (
        <>
            <QualityStyle>
                <div className="qualiyContainer">
                    <div className="leftArea">
                            <h2>We value quality over everything </h2>

                            <span className="spanOne" >
                                Hellooo customers, guess what? We're here to bring some great news for you! 
                                our webinar platform delivers tons of features that you dont want to miss!!!
                                come and check our spectacular quality video with decent audio!
                            </span>

                            <span className="spanTwo">
                                Just get a decent internet connection and a computer or laptop and
                                there you go! you're ready to go xD
                            </span>
                    </div>
                    <div className="rightArea">
                        <img src={Webinar} alt="" className="webinarImageOne" />
                    </div>
                </div>
            </QualityStyle>
        </>
    );
}

// styled components
const QualityStyle = styled.div`

    margin: 0;
    padding: 0;
    width: 99.9%;
    height: 500px;
    background-color: #000000;
    color: darkgoldenrod;

    h2 {
        font-family: 'Beau Rivage', cursive;
        font-size: 50px;
    }

    span {
        color: #fff;
        margin: 0px 150px;
        padding: 25px;
        font-size: 18px;
    }

    .spanTwo {
        margin-bottom: 20px;
    }

    .qualiyContainer {
        display: grid;
        grid-template-columns: repeat(2, 39rem);
    }

    .leftArea, .rightArea {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .webinarImageOne {
        width: 80%;
    }
`

export default Quality;