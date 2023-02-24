import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { ProSidebarProvider } from "react-pro-sidebar";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Dashboard from "./Components/Dashboard/Dashboard";
import Home from "./Components/Home/Home";
import Carousel from "./Components/SignupLogin/Carousel";
import Login from "./Components/SignupLogin/Login";
import LoginSignup from "./Components/SignupLogin/LoginSignup";
import Signup from "./Components/SignupLogin/Signup";
import SideBar from "./Components/Dashboard/SideBar";
import TopBar from "./Components/Dashboard/TopBar";
import Team from "./Components/Dashboard/Team";
import Contacts from "./Components/Dashboard/Contacts";
import Invoices from "./Components/Dashboard/Invoices";
import Form from "./Components/Dashboard/Form";
import Calendar from "./Components/Dashboard/Calendar";
import Faq from "./Components/Dashboard/Faq";
import BarChart from "./Components/Dashboard/BarChart";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ProSidebarProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {/* <main className="content"> */}
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="login" element={<LoginSignup />} />
                <Route path="carousel" element={<Carousel />} />
                <Route path="login1" element={<Login />} />
                <Route path="signup" element={<Signup />} />
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="dashboard/sidebar" element={<SideBar />} />
                <Route path="dashboard/team" element={<Team />} />
                <Route path="dashboard/contacts" element={<Contacts />} />
                <Route path="dashboard/invoices" element={<Invoices />} />
                <Route path="dashboard/form" element={<Form />} />
                <Route path="dashboard/calendar" element={<Calendar />} />
                <Route path="dashboard/faq" element={<Faq />} />
                <Route path="dashboard/barchart" element={<BarChart />} />
              </Routes>
            </BrowserRouter>
          {/* </main> */}
        </ThemeProvider>
      </ProSidebarProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
