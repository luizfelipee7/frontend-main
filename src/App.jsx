import { GlobalStyle } from "./Style/styleGlobal";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./router.jsx";
import { ThemeProvider } from "styled-components";
import { light } from "./Style/Themes/light";
import { dark } from "./Style/Themes/dark";

export function App() {
    return (
        <>
            <ThemeProvider theme={light}>
                <Router>
                    <GlobalStyle />
                    <Routes />
                </Router>
            </ThemeProvider>
        </>
    );
}
