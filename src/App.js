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
import TraceSummaryChart from "./scenes/dashboard/summary/TraceSummaryChart";
import LogSummaryChart from "./scenes/dashboard/summary/LogSummaryChart";
import DashboardTopBar from "./scenes/dashboard/DashboardTopBar";

function App() {
  const [theme, colorMode] = useMode();

  // const TraceNavBar = () => {
  //   <Routes>
  //     <Route index element={<SummaryChart />} />

  //   </Routes>
  // }

  const DashboardSection = () => {
    return (
      <div>
        <DashboardTopBar />
        <Routes>
          <Route index element={<TraceSummaryChart />} />
          <Route path="logSummary" element={<LogSummaryChart />} />
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
            <Route path="dashboard/*" element={<DashboardSection />} />
            <Route path="traces" element={<Traces />} />
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