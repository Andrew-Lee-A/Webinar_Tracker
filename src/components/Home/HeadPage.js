import styled from "styled-components";
import headImage from "../../img/samantha-borges-EeS69TTPQ18-unsplash.jpg"

function HeadPage () {
    return (
        <>
            <HeadPageStyle>
                <span className="headMessage" >Experience the most reliable webinar platform on earth</span>
            </HeadPageStyle>
        </>
    )
}

const HeadPageStyle = styled.div`

    width: 99%;
    height: 35rem;
    clip-path: polygon(0 100%, 0 0, 100% 0, 100% 85%);
    background-image: url(${headImage});
    background-size: cover;
    background-repeat: no-repeat;
    color: darkorange;
    border: 1px solid #000;

    .headMessage {
        font-size: 70px;
        font-weight: bold;
        padding: 40px;
        font-family: 'Beau Rivage', cursive;
    }
    
    span {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 2rem;
    }
`

export default HeadPage;