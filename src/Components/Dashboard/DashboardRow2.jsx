import { Box, IconButton, Typography, useTheme } from "@mui/material";
import React from "react";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import { mockTransactions } from "../../Data/mockData";
import { tokens } from "../../theme";
import LineChart from "../utils/LineChart";

function DashboardRow2() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const dataFormatter = (number) => {
    return "Ksh " + Intl.NumberFormat("KE").format(number);
  };

  return (
    <>
      {/* REVENUE GENERATED */}
      <Box
        gridColumn="span 8"
        gridRow="span 2"
        backgroundColor={colors.primary[400]}
      >
        <Box
          mt="25px"
          p="0 30px"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box>
            <Typography variant="h5" fontWeight="600" color={colors.grey[100]}>
              Revenue Generated
            </Typography>
            <Typography
              variant="h3"
              fontWeight="bold"
              color={colors.greenAccent[500]}
            >
              {dataFormatter(59342245)}
            </Typography>
          </Box>

          <Box>
            <IconButton>
              <DownloadOutlinedIcon
                sx={{
                  fontSize: "26px",
                  color: colors.greenAccent[500],
                }}
              />
            </IconButton>
          </Box>
        </Box>

        <Box height="250px" paddingBottom="20px">
          <LineChart isDashboard={true} />
        </Box>
      </Box>

      {/* TRANSACTIONS */}
      <Box
        gridColumn="span 4"
        gridRow="span 2"
        backgroundColor={colors.primary[400]}
        overflow="auto"
      >
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          borderBottom={`4px solid ${colors.primary[500]}`}
          colors={colors.grey[100]}
          p="15px"
        >
          <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
            Recent Transactions
          </Typography>
        </Box>
        {mockTransactions.map((transaction, i) => (
          <Box
            key={`${transaction.txId} - ${i}`}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary[500]}`}
            p="15px"
          >
            <Box>
              <Typography
                color={colors.greenAccent[500]}
                variant="h5"
                fontWeight="600"
              >
                {transaction.txId}
              </Typography>
              <Typography color={colors.grey[100]}>
                {transaction.user}
              </Typography>
            </Box>
            <Box color={colors.grey[100]}>{transaction.date}</Box>
            <Box
              backgroundColor={colors.greenAccent[700]}
              p="5px 10px"
              borderRadius="4px"
            >
              {dataFormatter(transaction.cost)}
            </Box>
          </Box>
        ))}
      </Box>
    </>
  );
}

export default DashboardRow2;
