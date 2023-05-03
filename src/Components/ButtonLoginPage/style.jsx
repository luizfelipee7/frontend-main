import styled from 'styled-components'

export const ButtonLoginPageContainerDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 250px;
    margin-top: 30px;

    a {
        text-decoration: none;
        width: 100%;

        button {
            color: ${props => props.theme.colors.cardLoginButtonText};
            background-color: ${props => props.theme.colors.cardLoginButtonEnter};
            width: 100%;
            padding: 8px;
            border: none;
            border-radius: 10px;
            font-family: 'Poppins', sans-serif;
            font-weight: 600;
            font-size: 18px;
            transition: all 0.3s ease-in-out;
            cursor: pointer;

            &:hover {
                background-color: ${props => props.theme.colors.cardLoginButtonEnterHover};
            }
        }
    }

    @media only screen and (max-width: 450px){
        width: 230px;
    }
`;