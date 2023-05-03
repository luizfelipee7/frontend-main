import styled from 'styled-components'

export const SideBarContainerDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 250px;
    background-color: ${props => props.theme.colors.sideBarContainerBackgroundColor};
    padding: 50px 0px;
    gap: 50px;
    box-shadow: 4px 0px 19px 10px ${props => props.theme.colors.sideBarContainerBoxShadow};
`;

export const SideBarContainerPhotoProfileDiv = styled.div`
    background-color: ${props => props.theme.colors.sideBarContainerPhotoBackgroundColor};
    padding: 15px;
    border-radius: 50%;
`;

export const SideBarContainerItemsDiv = styled.div`
    ul {
        position: absolute;
        left: 0;
        width: 200px;

        a {
            text-decoration: none;
            color: ${props => props.theme.colors.sideBarColorTextItems};

            li {
                margin-bottom: 18px;
                list-style: none;
                padding: 15px;
                font-family: "Poppins", sans-serif;
                font-weight: 600;
                font-size: 15px;
                border-radius: 0px 30px 30px 0px;
                cursor: pointer;
                transition: all 0.3s ease-in-out;
                align-items: center;
                display: flex;

                svg {
                    display: none;
                    margin-right: 10px;
                    color: ${props => props.theme.colors.sideBarColorTextItemsHoverAndActive};
                }

                &:hover{
                    background-color: ${props => props.theme.colors.sideBarBackgroundColorItemsHoverAndActive};
                    color: ${props => props.theme.colors.sideBarColorTextItemsHoverAndActive};

                    svg {
                        display: flex;
                    }
                }
            }

            &.active {
                li {
                    background-color: ${props => props.theme.colors.sideBarBackgroundColorItemsHoverAndActive};
                    color: ${props => props.theme.colors.sideBarColorTextItemsHoverAndActive};
                    
                    svg {
                        display: flex;
                    }
                }
            }
        }
    }
`;