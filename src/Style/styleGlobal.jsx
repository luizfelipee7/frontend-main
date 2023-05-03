import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        transition: all 0.3s ease-in-out;
    }
    html {
        scroll-behavior: smooth;
        font-family: "Poppins", sans-serif;
    }
    .BodyContainerDiv {
        display: flex;
        height: 100vh;
        background-color: ${(props) =>
            props.theme.colors.bodyContainerBackgroundColor};
    }
`;
