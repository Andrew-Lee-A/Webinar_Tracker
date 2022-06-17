import styled from 'styled-components';

// images
import Secure from '../../img/cyber-security.png'
import Trust from '../../img/trust.png'
import Free from '../../img/free.png'
import Quick from '../../img/quick.png'

function Features() {

    return (
        <>
            <FeaturesStyle>
                <div className="header">
                    Why choose us?
                </div>

                <div className="featureContainer">
                    <div className="featureSecure">
                        Secure 
                        <img className='secureImg' src={Secure} alt=""></img>
                    </div>
                    <div className="featureTrustable">
                        Trustworthy
                        <img  className='trustImg' src={Trust} alt=""></img>
                    </div>
                    <div className="featureFree">
                        Completely Free 
                        <img  className='freeImg' src={Free} alt=""></img>
                    </div>
                    <div className="featureRapid">
                        Fast and Easy 
                        <img  className='rapidImg' src={Quick} alt=""></img>
                    </div>
                </div>
            </FeaturesStyle>
        </>
    );
}

// Styled-components
const FeaturesStyle = styled.div`   
    width: 99.9%;
    height: 30rem;
    background-color: #000000;
    color: orange;
    clip-path: polygon(0 0, 100% 23%, 100% 100%, 0% 100%);

    .header {
        padding: 90px;
        font-family: 'Beau Rivage', cursive;
        font-size: 80px;
        font-weight: bold;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .featureContainer {
        display: flex;
        align-items: center;
        justify-content: space-evenly;
    }

    .featureSecure, .featureTrustable, .featureFree, .featureRapid {
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif, Courier, monospace, cursive;
        font-size: 30px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .secureImg, .trustImg, .freeImg, .rapidImg {
        margin-top: 15px;
        width: 90px;
    }
`

export default Features;