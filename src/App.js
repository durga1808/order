import SideNavbar from "./global/SideNavbar";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import { Route, Routes } from "react-router";
import LoginPage from "./scenes/auth/Login";
import Topbar from "./global/Topbar";
import { GlobalContextProvider } from "./global/globalContext/GlobalContext";
import Traces from "./scenes/traces";
import Metrics from "./scenes/metrics";
import Logs from "./scenes/logs";
import TraceList from "./scenes/traces/trace/TraceList";
import SummaryChart from "./scenes/traces/summary/SummaryChart";
import TraceTopBar from "./scenes/traces/TraceTopBar";

function App() {
  const [theme, colorMode] = useMode();

  // const TraceNavBar = () => {
  //   <Routes>
  //     <Route index element={<SummaryChart />} />

  //   </Routes>
  // }

  const TraceSection = () => {
    return (
      <div>
        <TraceTopBar />
        <Routes>
          <Route index element={<SummaryChart />} />
          <Route path="trace" element={<TraceList />} />
        </Routes>
      </div>
    )
  }

  const MainPage = () => {
    return (
      <div className="app">
        <SideNavbar />
        <main className="content">
          <Topbar />
          <Routes>
            <Route path="traces/*" element={<TraceSection />} />
            <Route path="metrics" element={<Metrics />} />
            <Route path="logs" element={<Logs />} />
          </Routes>
        </main>
      </div>
    );
  };

  return (
    <GlobalContextProvider>
      <ThemeProvider theme={theme}>
        <ColorModeContext.Provider value={colorMode}>
          <CssBaseline />
          <Routes>
            <Route path="/" element={<LoginPage />} />
            {/* <Route path="/dashboard" element={<Dashboard />} /> */}
            {/* Nested routes for /mainpage/* */}
            <Route path="/mainpage/*" element={<MainPage />} />
          </Routes>
        </ColorModeContext.Provider>
      </ThemeProvider>
    </GlobalContextProvider>
  );
}
export default App;