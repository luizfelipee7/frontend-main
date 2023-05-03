import {
    CardLoginContainerDiv,
    CardLoginLogoDiv,
    CardLoginContainerForm,
    CardLoginBoxInputUserAndPasswordDiv,
} from "./style";
import { User, Eye } from "phosphor-react";

import { ButtonLoginPage } from "../ButtonLoginPage";

import LogoUnasp from "../../Assets/logoUnasp.png";

export function CardLoginPage() {
    return (
        <>
            <CardLoginContainerDiv>
                <CardLoginLogoDiv>
                    <img src={LogoUnasp} alt="Logo Unasp" />
                </CardLoginLogoDiv>
                <CardLoginContainerForm>
                    <CardLoginBoxInputUserAndPasswordDiv>
                        <User size={23} />
                        <input type="number" placeholder="Usuário" />
                    </CardLoginBoxInputUserAndPasswordDiv>
                    <CardLoginBoxInputUserAndPasswordDiv>
                        <Eye size={23} />
                        <input type="password" placeholder="Senha" />
                    </CardLoginBoxInputUserAndPasswordDiv>
                    <div>
                        <ButtonLoginPage type="submit" />
                    </div>
                </CardLoginContainerForm>
            </CardLoginContainerDiv>
        </>
    );
}
