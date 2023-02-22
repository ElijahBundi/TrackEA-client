import React, { useState } from "react";
import Signup from "./Signup";
import {
  Paper,
  Tabs,
  Tab,
  Container,
  Toolbar,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import Login from "./Login";
import Login2 from "./Login2";
import ProgressIndicator from "../utils/ProgressIndicator";
import Carousel from "./Carousel";
import home from "../../Assets/About.jpg";

function LoginSignup({ onLogin }) {
  const [value, setValue] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const handleChange = (event, newValue) => {
    console.log(newValue);
    setValue(newValue);
  };

  const paperStyle = {
    backgroundImage:
      "linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.73)), url('https://images.pexels.com/photos/4246211/pexels-photo-4246211.jpeg?auto=compress&cs=tinysrgb&w=1600')",
    backgroundPosition: "center",
    backgroundSize: "cover",

    padding: 20,
    height: 600,
    width: 400,
    margin: "100px 0px",
  };
  const paperStyleInner = {
    padding: 20,
    margin: "100px 0px",
    height: 650,
    width: "60%",
  };

  return (
    <Box
      sx={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.9),
        rgba(0, 0, 0, 0.8)),url(${home})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Toolbar
        sx={{
          color: "#feb06a",
          fontSize: "18px",
          padding: "10px 0px"
        }}
      >
        <Typography variant="h6" noWrap component="div">
          TrackEA
        </Typography>
      </Toolbar>
      <Container
        sx={{
          display: "flex",
          flexWrap: "wrap",
          // position: "relative",
          justifyContent: "center",
          alignItems: "center",
          justifyItems: "center",
        }}
      >
        {isLoading ? <ProgressIndicator /> : null}
        {/* <Paper
          elevation={10}
          style={paperStyle}
          sx={{ display: { xs: "none", md: "flex" } }}
        >
          <Carousel />
        </Paper> */}

        <Paper
          style={paperStyleInner}
          sx={{ display: { xs: "flex", sm: "block" }, bgcolor: "#e6dcc6" }}
        >
          <Box
            sx={{
              width: "100%",
            }}
          >
            <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
              <Tabs
                value={value}
                onChange={handleChange}
                variant="fullWidth"
                indicatorColor="secondary"
                textColor="inherit"
              >
                <Tab label="LOG IN" />
                <Tab label="SIGN UP" />
              </Tabs>
            </Box>
            
          </Box>
          {value === 0 ? (
              <Login2 setLoading={setIsLoading} onLogin={onLogin} />
            ) : (
              <Signup setLoading={setIsLoading} onLogin={onLogin} />
            )}
        </Paper>
      </Container>
    </Box>
  );
}

export default LoginSignup;
