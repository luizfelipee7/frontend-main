import styled from "styled-components";

export const CardLoginContainerDiv = styled.div`
    width: 400px;
    height: 400px;
    background-color: ${(props) => props.theme.colors.cardLoginPageBackground};
    border-radius: 20px;

    &:hover {
        box-shadow: 0px 5px 19px 10px
            ${(props) => props.theme.colors.cardLoginBoxShadow};
    }

    @media only screen and (max-width: 450px) {
        width: 300px;
    }
`;

export const CardLoginLogoDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
    margin-bottom: 60px;

    img {
        width: 140px;
    }
`;

export const CardLoginContainerForm = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const CardLoginBoxInputUserAndPasswordDiv = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    margin-bottom: 40px;

    svg {
        color: ${(props) => props.theme.colors.cardLoginSVGColor};
        position: absolute;
    }

    input {
        font-family: "Poppins", sans-serif;
        background-color: ${(props) =>
            props.theme.colors.cardLoginInputBackgroundColor};
        border-top: none;
        border-left: none;
        border-right: none;
        padding: 5px 5px 3px 30px;
        width: 250px;
        color: ${(props) => props.theme.colors.cardLoginInputTextColor};

        &::placeholder {
            color: ${(props) => props.theme.colors.cardLoginInputTextColor};
        }

        &:focus,
        &:focus {
            box-shadow: 0 0 0 0;
            outline: 0;
        }

        &::-webkit-inner-spin-button {
            -webkit-appearance: none;
        }

        @media only screen and (max-width: 450px) {
            width: 230px;
        }
    }
`;
