import { Box, useTheme } from "@mui/material";
import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import { tokens } from "../../theme";
import StatBox from "../utils/StatBox";

function DasboardRow1() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <>
      {/* EMAILS */}
      <Box
        gridColumn="span 3"
        backgroundColor={colors.primary[400]}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <StatBox
          title="12,252"
          subtitle="Emails sent"
          progress="0.75"
          increase="+14%"
          icon={
            <EmailIcon
              sx={{
                color: colors.greenAccent[600],
                fontSize: "26px",
              }}
            />
          }
        />
      </Box>

      {/* SALES */}
      <Box
        gridColumn="span 3"
        backgroundColor={colors.primary[400]}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <StatBox
          title="431,225"
          subtitle="Sales Obtained"
          progress="0.5"
          increase="+21%"
          icon={
            <PointOfSaleIcon
              sx={{
                color: colors.greenAccent[600],
                fontSize: "26px",
              }}
            />
          }
        />
      </Box>

      {/* NEW CLIENTS */}
      <Box
        gridColumn="span 3"
        backgroundColor={colors.primary[400]}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <StatBox
          title="32,441"
          subtitle="New Clients"
          progress="0.3"
          increase="+5%"
          icon={
            <PersonAddIcon
              sx={{
                color: colors.greenAccent[600],
                fontSize: "26px",
              }}
            />
          }
        />
      </Box>

      {/* TRAFFIC */}
      <Box
        gridColumn="span 3"
        backgroundColor={colors.primary[400]}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <StatBox
          title="1,325,124"
          subtitle="Traffic Inbound"
          progress="0.80"
          increase="+43%"
          icon={
            <TrafficIcon
              sx={{
                color: colors.greenAccent[600],
                fontSize: "26px",
              }}
            />
          }
        />
      </Box>
    </>
  );
}

export default DasboardRow1;
