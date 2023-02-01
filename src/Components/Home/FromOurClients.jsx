import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

function FromOurClients() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "#2a292b",
        padding: "60px 0px",
        gap: 7,
      }}
    >
      <Box
        sx={{
          color: "#e6dcc6",
        }}
      >
        <Typography variant="h2">From Our Clients</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: 13,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexFlow: "column",
            alignItems: "center",
            gap: 4,
          }}
        >
          <PersonOutlineOutlinedIcon
            sx={{ color: "#e6dcc6", width: 80, height: 80 }}
          />
          <Box
            sx={{
              justifyContent: "space-between",
              height: "235px",
              display: "flex",
              flexFlow: "column",
            }}
          >
            <Typography
              sx={{
                width: 250,
                textAlign: "center",
                color: "#e6dcc6",
                fontSize: "18px",
              }}
            >
              Espionage is light years ahead of their competition. I thought
              going with the cheaper competitor would be my best option and I
              was so wrong.
            </Typography>
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
              Casper Berkley, <br />
              President of Fib & Joe
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexFlow: "column",
            alignItems: "center",
            gap: 4,
          }}
        >
          <PersonOutlineOutlinedIcon
            sx={{ color: "#e6dcc6", width: 80, height: 80 }}
          />
          <Box
            sx={{
              justifyContent: "space-between",
              height: "235px",
              display: "flex",
              flexFlow: "column",
            }}
          >
            <Typography
              sx={{
                width: 250,
                textAlign: "center",
                color: "#e6dcc6",
                fontSize: "18px",
              }}
            >
              I discovered a couple of minutes after the purchase of XNSPY, that
              Espionage has additional features that I would appreciate to have.
            </Typography>
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
              Casper Berkley, <br />
              President of Fib & Joe
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexFlow: "column",
            alignItems: "center",
            gap: 4,
          }}
        >
          <PersonOutlineOutlinedIcon
            sx={{ color: "#e6dcc6", width: 80, height: 80 }}
          />
          <Box
            sx={{
              justifyContent: "space-between",
              height: "235px",
              display: "flex",
              flexFlow: "column",
            }}
          >
            <Typography
              sx={{
                width: 250,
                textAlign: "center",
                color: "#e6dcc6",
                fontSize: "18px",
              }}
            >
              I wanted remote sound recording and they do not have it yet, but
              generally it's the best tracking device so far.
            </Typography>
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
              Casper Berkley, <br />
              President of Fib & Joe
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default FromOurClients;
