import {
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  Link,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import home from "../../Assets/About.jpg";

function Login() {
  const textFieldStyle = { margin: "10px auto" };

  return (
    <Box>
      <Box
        sx={{
          color: "#feb06a",
          fontSize: "18px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        position="absolute"
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            TrackEA
          </Typography>
        </Toolbar>
      </Box>
      <Box
        sx={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.9),
        rgba(0, 0, 0, 0.8)),url(${home})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "150px 50px",
          color: "#e6dcc6",
          height: "100vh",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography variant="h2">Create New Account</Typography>
          <Box
            sx={{
              display: "flex",
              gap: 1,
            }}
          >
            <Typography>Already registered? </Typography>
            <Link> Log in here</Link>
          </Box>
        </Box>
        <form>
          <Box
            sx={{
              pt: 3,
              display: "flex",
              flexDirection: "column",
              width: "100%",
              gap: 2,
            }}
          >
            <TextField
              size="small"
              id="outlined-basic"
              //   value={password}
              label="Email"
              placeholder="enter email"
              //   onChange={(e) => setPassword(e.target.value)}
              //   variant="standard"
              style={textFieldStyle}
              color="warning"
              fullWidth
              focused
              required
            />
            <TextField
              size="small"
              id="outlined-basic"
              label="Password"
              placeholder="enter password"
              type="password"
              //   variant="outlined"
              style={textFieldStyle}
              fullWidth
              color="warning"
              focused
              required
            />
            <FormControlLabel
              control={<Checkbox defaultUnChecked />}
              label="Remember me"
            />
            <Button variant="contained" color="error" type="submit" fullWidth>
              Log In
            </Button>
          </Box>
        </form>
      </Box>
    </Box>
  );
}

export default Login;
