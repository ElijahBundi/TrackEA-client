import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { Button } from "@mui/material";
import home from "../../Assets/Home.png";

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);


const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

function NavBar() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box
      sx={{
        display: "flex",
        bgcolor: "#2a292b",
        height: "auto",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flex: 2,
          height: "auto",
        }}
      >
        {/* <CssBaseline /> */}
        <Box 
          sx={{ 
            color: '#feb06a',
            fontSize: '18px',
            width: "66.67%"
          }} 
          position="absolute" 
          open={open}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{ mr: 2, ...(open && { display: "none" }) }}
            >
              <MenuIcon sx={{color: '#e6dcc6'}}/>
            </IconButton>
            <Typography variant="h6" noWrap component="div">
              TrackEA
            </Typography>
          </Toolbar>
          <Divider sx={{ bgcolor: '#e6dcc6' }} />
        </Box>
        {/* <Divider sx={{ color: "white" }} /> */}
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
              bgcolor: '#e6dcc6'
            },
          }}
          variant="persistent"
          anchor="left"
          open={open}
        >
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "ltr" ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <List>
            {["Home", "About Us", "Our Products", "Contact Us"].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {["Dashboard", "Sign Up/Login"].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Drawer>
        <Main
          open={open}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 7,
            paddingTop: 10,
            justifyContent: "center",
            alignItems: "left",
            height: "60vh",
          }}
        >
          <Box>
            <Typography variant="h1" sx={{ color: "#e6dcc6" }}>
              Are you on the right Track?
            </Typography>
          </Box>
          <Box
            sx={{
              paddingBottom: 10,
              justifyContent: "left",
            }}
          >
            <Button variant="contained" size="large">
              Learn More
            </Button>
          </Box>
        </Main>
      </Box>
      <Box
        sx={{
          backgroundImage: `url(${home})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          flex: 1,
          // height: "768px",
          // width: "512px",
          backgroundPosition: "center",
        }}
      />
    </Box>
  );
}
export default NavBar;
