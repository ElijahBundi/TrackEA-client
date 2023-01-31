import { Box, Button, Typography } from "@mui/material";
import React from "react";
import home from "../../Assets/About.jpg";
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import Groups2OutlinedIcon from '@mui/icons-material/Groups2Outlined';
import LanOutlinedIcon from '@mui/icons-material/LanOutlined';

function WhyChooseUs() {
  return (
    <Box
      sx={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.9),
            rgba(0, 0, 0, 0.8)),url(${home})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "50px 50px",
        gap: 10
      }}
    >
      <Box
        sx={{
          color: "#e6dcc6",
        }}
      >
        <Typography variant="h1">Why Choose Us</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: 8,
        }}
      >
        <Box
          sx={{
            padding: "50px 0px 20px",
            alignItems: "center",
            display: "flex",
            flexFlow: "column",
          }}
        >
          <Box
            sx={{
              width: 150,
              height: 150,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor:
                "linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1))",
              borderRadius: "50%",
              borderStyle: "solid",
              borderColor: "#e6dcc6",
            }}
          >
            <BarChartOutlinedIcon sx={{ color: '#e6dcc6', width: 80, height: 80 }}/>
          </Box>
          <Typography
            sx={{
              textAlign: "center",
              padding: "20px 0px 5px",
              color: "#e6dcc6",
              letterSpacing: "1px",
              fontSize: "18px",
              fontWeight: "bold",
            }}
          >
            286%
          </Typography>
          <Typography
            sx={{
              width: 250,
              textAlign: "center",
              color: "#e6dcc6",
              fontSize: "18px",
            }}
          >
            Increase in users in the last three years{" "}
          </Typography>
        </Box>
        <Box
          sx={{
            padding: "50px 0px 20px",
            alignItems: "center",
            display: "flex",
            flexFlow: "column",
          }}
        >
          <Box
            sx={{
              width: 150,
              height: 150,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor:
                "linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1))",
              borderRadius: "50%",
              borderStyle: "solid",
              borderColor: "#e6dcc6",
            }}
          >
            <Groups2OutlinedIcon sx={{ color: '#e6dcc6', width: 80, height: 80 }}/>
          </Box>
          <Typography
            sx={{
              textAlign: "center",
              padding: "20px 0px 5px",
              color: "#e6dcc6",
              letterSpacing: "1px",
              fontSize: "18px",
              fontWeight: "bold",
            }}
          >
            252
          </Typography>
          <Typography
            sx={{
              width: 250,
              textAlign: "center",
              color: "#e6dcc6",
              fontSize: "18px",
            }}
          >
            Number of corporate clients served{" "}
          </Typography>
        </Box>
        <Box
          sx={{
            padding: "50px 0px 20px",
            alignItems: "center",
            display: "flex",
            flexFlow: "column",
          }}
        >
          <Box
            sx={{
              width: 150,
              height: 150,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor:
                "linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1))",
              borderRadius: "50%",
              borderStyle: "solid",
              borderColor: "#e6dcc6",
            }}
          >
            <LanOutlinedIcon sx={{ color: '#e6dcc6', width: 80, height: 80 }} />
          </Box>
          <Typography
            sx={{
              textAlign: "center",
              padding: "20px 0px 5px",
              color: "#e6dcc6",
              letterSpacing: "1px",
              fontSize: "18px",
              fontWeight: "bold",
            }}
          >
            2,843
          </Typography>
          <Typography
            sx={{
              width: 250,
              textAlign: "center",
              color: "#e6dcc6",
              fontSize: "18px",
            }}
          >
            Work teams currently active on the platform{" "}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default WhyChooseUs;
