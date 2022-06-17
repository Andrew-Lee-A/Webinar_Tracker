import styled from "styled-components";

// images
import Facebook from '../../img/facebook.png'
import Twitter from '../../img/twitter.png'
import Instagram from '../../img/instagram.png'
import Whatsapp from '../../img/whatsapp.png'

function Footer() {

    return (
        <>
        <FooterStyle>
            <div className="footerContainer">
                <div className="babcockCompany">
                    CPD Hub Company

                    <div className="babcockCompanyDetails">
                        <span>Webinar Tracker</span>                        
                        <span>331 Queen st, GGWP </span>                        
                        <span>Auckland CBD</span>                        
                        <span>+64 022 1122 0001</span>                        
                    </div>
                </div>

                <div className="siteInfo">
                    Site Information

                    <div className="siteDetails">
                        <span>User login</span>                        
                        <span>Our details </span>                        
                        <span>Privacy policy</span>                        
                        <span>Terms of Service</span>                        
                    </div>
                </div>

                <div className="socialMedia">
                    Social Media

                    <div className="socialMediaImages">
                        <img className="smImages" src={Facebook} alt="" />
                        <img className="smImages" src={Twitter} alt="" />
                        <img className="smImages" src={Instagram} alt="" />
                        <img className="smImages" src={Whatsapp} alt="" />
                    </div>
                </div>
            </div>

            <div className="bottomPart">
                <p className="babcockBottom" >CPD hub company </p> copy right reserved
            </div>
        </FooterStyle>
        </>
    );
}

// styled-components
const FooterStyle = styled.div`

    // GLOBAL STYLE
    width: 99.9%;
    height: 15rem;
    color: white;
    background-color: #000000;

    span {
        font-size: 20px;
        color: #FFFFFF;
        margin-top: 20px;
        font-weight: lighter;
    }


    .footerContainer {
        display: flex;      
        align-items: center;
        justify-content: space-around;

        border-bottom: 1px solid #FFFFFF;
    }

    .babcockCompanyDetails, .siteDetails, .socialMediaImages {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;

        cursor: pointer;
    }

    .babcockCompany, .sections, .siteInfo, .socialMedia {
        font-size: 30px;
        font-weight: bold;
        color: darkgoldenrod;
        margin-bottom: 20px;
    }

    .smImages {
        margin-top: 10px;
        width: 35px;
    }

    .bottomPart {
        margin-top: 20px;

        font-size: 13px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    .babcockBottom {
        font-size: 13px;
        color: darkgoldenrod;
    }
`

export default Footer;