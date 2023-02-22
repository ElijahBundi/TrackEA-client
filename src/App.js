import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Dashboard from "./Components/Dashboard/Dashboard";
import Home from "./Components/Home/Home";
import Carousel from "./Components/SignupLogin/Carousel";
import Login from "./Components/SignupLogin/Login";
import LoginSignup from "./Components/SignupLogin/LoginSignup";
import Signup from "./Components/SignupLogin/Signup";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login" element={<LoginSignup />} />
            <Route path="carousel" element={<Carousel />} />
            <Route path="login1" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route path="dashboard" element={<Dashboard />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
