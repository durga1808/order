import SideNavbar from "./global/SideNavbar";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import { Route, Routes } from "react-router";
import LoginPage from "./scenes/auth/Login";
import Topbar from "./global/Topbar";

function App() {
  const [theme, colorMode] = useMode();

  const MainPage = () => {
    return (
      <div className="app">
        <SideNavbar />
        <main className="content">
          <Topbar />
          <Routes>
          </Routes>
        </main>
      </div>
    );
  };

  return (
    // <GlobalContextProvider>
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Route path="/" element={<LoginPage />} />
          {/* <Route path="/dashboard" element={<Dashboard />} /> */}
          {/* Nested routes for /mainpage/* */}
          <Route path="/mainpage/*" element={<MainPage />} />
        </Routes>
      </ThemeProvider>
    </ColorModeContext.Provider>
    // </GlobalContextProvider>
  );
}
export default App;