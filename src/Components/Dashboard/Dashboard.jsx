import { Box, Button, useTheme } from "@mui/material";
import React from "react";
import { Sidebar } from "react-pro-sidebar";
import Header from "../utils/Header";
import TopBar from "./TopBar";
import { tokens } from "../../theme";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import DasboardRow1 from "./DasboardRow1";
import DashboardRow2 from "./DashboardRow2";
import DashboardRow3 from "./DashboardRow3";

function Dashboard() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />

        <Box>
          <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            <DownloadOutlinedIcon sx={{ mr: "10px" }} />
            Download Reports
          </Button>
        </Box>
      </Box>

      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* ROW 1 */}
        <DasboardRow1 />

        {/* ROW 2 */}
        <DashboardRow2 />

        {/* ROW 3 */}
        <DashboardRow3 />

      </Box>
    </Box>
  );
}

export default Dashboard;
