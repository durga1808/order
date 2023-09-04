import SideNavbar from "./global/SideNavbar";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import { Route, Routes } from "react-router";
import Topbar from "./global/Topbar";

function App() {
  const [theme, colorMode] = useMode();
  return (
    <div className="App">
        {/* <header className="App-header">
          HELLO WORLD!
        </header> */}
        {/* <SideNavbar /> */}
      
      <ColorModeContext.Provider value={colorMode}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Routes>
              <Route path="/" element={<SideNavbar />} />
              <Route path="/" element={<Topbar />} />
            </Routes>
          </ThemeProvider>
        </ColorModeContext.Provider>
    </div>
  );
}

export default App;
