import {
    SideBarContainerDiv,
    SideBarContainerPhotoProfileDiv,
    SideBarContainerItemsDiv
} from './style'

import {
    User,
    Notebook,
    FilePlus,
    Gear,
    Question
} from 'phosphor-react'

import { NavLink } from 'react-router-dom'

export function SideBar() {

    const sideBarItems = [
        {
            name: 'Meu Perfil',
            path: '/home',
            icon: <User size={20} />
        },
        {
            name: 'Meus Contratos',
            path: '/meuscontratos',
            icon: <Notebook size={20} />
        },
        {
            name: 'Novos Contratos',
            path: '/novoscontratos',
            icon: <FilePlus size={20} />
        },
        {
            name: 'Configurações',
            path: '/configuracoes',
            icon: <Gear size={20} />
        },
        {
            name: 'Ajuda',
            path: '/ajuda',
            icon: <Question size={20} />
        }
    ]

    return (
        <>
            <SideBarContainerDiv>
                <SideBarContainerPhotoProfileDiv>
                    <User size={55} weight="bold" />
                </SideBarContainerPhotoProfileDiv>
                <SideBarContainerItemsDiv>
                    <ul>
                        {
                            sideBarItems.map((item, index) => (
                                <NavLink to={item.path} key={index} className="link">
                                    <li>{item.icon}{item.name}</li>
                                </NavLink>
                            ))
                        }
                    </ul>
                </SideBarContainerItemsDiv>
            </SideBarContainerDiv>
        </>
    )
}