import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle `
    *{
        margin: 0;
        padding: 0;
        box-sizing: 0;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        font-size: 1.2rem;
        // overflow-y: hidden;
    }

    body {
        background-color: aliceblue;
    }

`;

export default GlobalStyle;