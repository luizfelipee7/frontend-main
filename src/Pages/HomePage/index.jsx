import {} from "./style";

import { SideBar } from "../../Components/SideBar/";

export function HomePage() {
    return (
        <>
            <div className="BodyContainerDiv">
                <SideBar />
                <div>Meu Perfil</div>
            </div>
        </>
    );
}
