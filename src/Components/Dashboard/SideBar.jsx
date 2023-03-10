import React from "react";
import { useState } from "react";
import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
// import "react-pro-sidebar/dist/css/styles.css";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlinedIcon from "@mui/icons-material/HelpOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import Contact from "../../Assets/Contact.png";
import TopBar from "./TopBar";

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <MenuItem
      active={selected === title}
      style={{ color: colors.grey[100] }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      {/* <Link to={to} /> */}
    </MenuItem>
  );
};

function SideBar() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const selected = "Dashboard";
  const { collapseSidebar } = useProSidebar();

  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important",
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        },
      }}
    >
      <Sidebar>
        <Menu iconShape="square">
          {/* LOGO & MENU ICON */}
          <MenuItem
            onClick={() => {
              setIsCollapsed(!isCollapsed);
              collapseSidebar();
            }}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h3" sx={{ color: '#feb06a', fontWeight: 'bold' }}>
                  TRACKEA
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {/* USER */}
          {!isCollapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  alt="profile-user"
                  width="100px"
                  height="100px"
                  src={Contact}
                  style={{
                    cursor: "pointer",
                    borderRadius: "50%",
                  }}
                />
              </Box>
              <Box textAlign="center">
                <Typography
                  variant="h2"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{
                    m: "10px 0 0 0",
                  }}
                >
                  Elly Bundi
                </Typography>
                <Typography variant="h5" color={colors.greenAccent[500]}>
                  VP TrackEA Admin
                </Typography>
              </Box>
            </Box>
          )}

          {/* MENU ITEMS */}
          <main paddingLeft={isCollapsed ? undefined : "10%"}>
            <MenuItem
              icon={<HomeOutlinedIcon />}
              component={<Link to={selected} />}
            >
              Dashboard
            </MenuItem>
            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Data
            </Typography>

            <MenuItem
              icon={<PeopleOutlinedIcon />}
              component={<Link to="dashboard/team" />}
            >
              Manage Team
            </MenuItem>
            <MenuItem
              icon={<ContactsOutlinedIcon />}
              component={<Link to="dashboard/contacts" />}
            >
              Contact Information
            </MenuItem>
            <MenuItem
              icon={<ReceiptOutlinedIcon />}
              component={<Link to="dashboard/invoices" />}
            >
              Invoices Balances
            </MenuItem>
            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Pages
            </Typography>
            <MenuItem
              icon={<PersonOutlinedIcon />}
              component={<Link to="dashboard/form" />}
            >
              Profile Form
            </MenuItem>
            <MenuItem
              icon={<CalendarTodayOutlinedIcon />}
              component={<Link to="dashboard/calendar" />}
            >
              Calendar
            </MenuItem>
            <MenuItem
              icon={<HelpOutlinedIcon />}
              component={<Link to="dashboard/faq" />}
            >
              FAQ Page
            </MenuItem>
            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Charts
            </Typography>
            <MenuItem
              icon={<BarChartOutlinedIcon />}
              component={<Link to="dashboard/bar" />}
            >
              Bar Chart
            </MenuItem>
            <MenuItem
              icon={<PieChartOutlineOutlinedIcon />}
              component={<Link to="dashboard/pie" />}
            >
              Pie Chart
            </MenuItem>
            <MenuItem
              icon={<TimelineOutlinedIcon />}
              component={<Link to="dashboard/line" />}
            >
              Line Chart
            </MenuItem>
            <MenuItem
              icon={<MapOutlinedIcon />}
              component={<Link to="dashboard/map" />}
            >
              Geography Chart
            </MenuItem>
          </main>
        </Menu>
      </Sidebar>
    </Box>
  );
}

export default SideBar;
