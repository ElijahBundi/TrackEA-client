import { Box, Card, CardMedia, Typography } from "@mui/material";
import { Container, maxWidth } from "@mui/system";
import React from "react";
import Start from "../../Assets/Start.png";

function ShouldYouStart() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        padding: 7,
        gap: 7,
        maxWidth: "70%",
        alignItems: "center",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <Card
        sx={{
          flex: 1,
          boxShadow:
            "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        }}
      >
        <CardMedia 
            component="img" 
            height="400px" 
            image={Start} 
            alt="Join Us" 
        />
      </Card>
      <Box
        sx={{
          color: "#202021",
          display: "flex",
          flexDirection: "column",
          flex: 2,
          gap: 3,
          justifyContent: "center",
        }}
      >
        <Typography variant="h2">Should You Start Tracking?</Typography>
        <Typography
          sx={{
            // width: 250,
            textAlign: "left",
            color: "#202021",
            fontSize: "25px",
          }}
        >
          “Once you start tracking your goals, you’re able to see the small, day
          by day progress that you might not otherwise notice.”
        </Typography>
      </Box>
    </Box>
  );
}

export default ShouldYouStart;
