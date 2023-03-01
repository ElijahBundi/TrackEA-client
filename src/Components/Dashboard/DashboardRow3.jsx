import { Box, Typography, useTheme } from "@mui/material";
import React from "react";
import { tokens } from "../../theme";
import BarChart from "../utils/BarChart";
import GeographyChart from "../utils/GeographyChart";
import ProgressCircle from "../utils/ProgressCircle";

function DashboardRow3() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  
  const dataFormatter = (number) => {
    return "Ksh " + Intl.NumberFormat("KE").format(number);
  };

  return (
    <>
    {/* CAMPAIGN */}
      <Box
        gridColumn="span 4"
        gridRow="span 2"
        backgroundColor={colors.primary[400]}
        p="30px"
      >
        <Typography variant="h5" fontWeight="600">
          Campaign
        </Typography>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          mt="25px"
        >
          <ProgressCircle size="125" />
          <Typography
            variant="h5"
            color={colors.greenAccent[500]}
            sx={{
              mt: "15px",
            }}
          >
            {dataFormatter(4835200)} revenue generated
          </Typography>
          <Typography>
            Includes extra miscellaneous expenditures and costs
          </Typography>
        </Box>
      </Box>

            {/* SALES QUANTITY */}
      <Box
        gridColumn="span 4"
        gridRow="span 2"
        backgroundColor={colors.primary[400]}
      >
        <Typography
          variant="h5"
          fontWeight="600"
          sx={{
            p: "30px 30px 0 30px",
          }}
        >
          Sales Quantity
        </Typography>
        <Box height="250px" mt="-20px">
          <BarChart isDashboard={true} />
        </Box>
      </Box>

          {/* GEOGRAPHY BASED TRAFFIC */}
      <Box
        gridColumn="span 4"
        gridRow="span 2"
        backgroundColor={colors.primary[400]}
        p="30px"
      >
        <Typography
          variant="h5"
          fontWeight="600"
          sx={{
            mb: "15px",
          }}
        >
          Geography Based Traffic
        </Typography>
        <Box height="200px">
          <GeographyChart isDashboard={true} />
        </Box>
      </Box>
    </>
  );
}

export default DashboardRow3;
