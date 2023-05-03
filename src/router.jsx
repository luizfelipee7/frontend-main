import { Routes, Route } from "react-router-dom";
import { LoginPage } from "./Pages/LoginPage";
import { HomePage } from "./Pages/HomePage";
import { MyContractsPage } from "./Pages/MyContractsPage";
import { NewContractsPage } from "./Pages/NewContractsPage";
import { SettingsPage } from "./Pages/SettingsPage";
import { HelpPage } from "./Pages/HelpPage";

export default function MainRoutes() {
    return (
        <Routes>
            <Route path="/" element={<LoginPage />} exact />
            <Route path="/home" element={<HomePage />} />
            <Route path="/meuscontratos" element={<MyContractsPage />} />
            <Route path="/novoscontratos" element={<NewContractsPage />} />
            <Route path="/configuracoes" element={<SettingsPage />} />
            <Route path="/ajuda" element={<HelpPage />} />
        </Routes>
    );
}
