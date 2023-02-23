import { Box } from "@mui/material";
import React from "react";
import { Sidebar } from "react-pro-sidebar";
import TopBar from "./TopBar";

function Dashboard() {
  return (
    <Box display='flex'>
      <Sidebar />
      <TopBar />
        
    </Box>
  );
}

export default Dashboard;
