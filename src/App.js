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
import DbSummaryCharts from "./scenes/dashboard/summary/DbSummaryCharts";
import KafkaSummaryChart from "./scenes/dashboard/summary/KafkaSummaryChart";
import KeplerPowerMetrics from "./scenes/dashboard/summary/keplerDashboardCharts";

function App() {
  const [theme, colorMode] = useMode();

  const DashboardSection = () => {
    return (
      <div>
        <Routes>
          <Route index element={<TraceSummaryChart />} />
          <Route path="logSummary" element={<LogSummaryChart />} />
          <Route path="dbSummary" element={<DbSummaryCharts />} />
          <Route path="kafkaSummary" element={<KafkaSummaryChart />} />
          <Route path="keplerDashboard" element={<KeplerPowerMetrics />} />
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
          <DashboardTopBar />
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
          {/* {localStorage.getItem("userInfo") !== null ? (<div className="app">
            <SideNavbar />
            <main className="content">
              <Topbar />
              <DashboardTopBar />
              <Routes>
                <Route path="/dashboard/*">
                  <Route index element={<TraceSummaryChart />} />
                  <Route path="logSummary" element={<LogSummaryChart />} />
                  <Route path="dbSummary" element={<DbSummaryCharts />} />
                  <Route path="kafkaSummary" element={<KafkaSummaryChart />} />
                  <Route path="keplerDashboard" element={<KeplerPowerMetrics />} />
                </Route>
                <Route path="/traces" element={<Traces />} />
                <Route path="/metrics" element={<Metrics />} />
                <Route path="/logs" element={<Logs />} />
              </Routes>
            </main>
          </div>) : null} */}
        </ColorModeContext.Provider>
      </ThemeProvider>
    </GlobalContextProvider>
  );
}
export default App;