import {
    ButtonLoginPageContainerDiv,
} from './style'

import { Link } from 'react-router-dom'

export function ButtonLoginPage() {
    return (
        <>
            <ButtonLoginPageContainerDiv>
                <Link to='/home'>
                    <button>Entrar</button>
                </Link>
            </ButtonLoginPageContainerDiv>
        </>
    )
}