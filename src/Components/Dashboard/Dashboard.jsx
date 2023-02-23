import { Box } from "@mui/material";
import React from "react";
import { Sidebar } from "react-pro-sidebar";
import Header from "./Header";
import TopBar from "./TopBar";

function Dashboard() {
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
      </Box>
    </Box>
  );
}

export default Dashboard;
