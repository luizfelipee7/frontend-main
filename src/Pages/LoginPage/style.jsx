import styled from "styled-components";

import BackgroundLoginPage from "../../Assets/backgroundLoginPage.png";

export const LoginPageContainerBackgroundDiv = styled.div`
    background: url(${BackgroundLoginPage});
    background-color: ${(props) => props.theme.colors.loginPagebackground};
    background-size: cover;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;
