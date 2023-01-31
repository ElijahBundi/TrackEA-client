import home from "../../Assets/Home.png";
import { Box, Button, Divider, Typography } from "@mui/material";
import React from "react";
import { Container, height } from "@mui/system";

function Hero() {
  return (
    <Box
      sx={{
        display: "flex",
        bgcolor: "#2a292b",
        height: 'auto',
      }}
    >
      <Container
        sx={{
          flex: 2,
          height: 'auto',
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignContent: "center",          
            height: '10vh',
            color: '#feb06a',
            fontSize: '18px'
          }}
        >
          TrackEA
        </Box>
        <Divider sx={{ color: 'white' }}/>
        <Box
            sx={{
                height: '60vh',
                justifyContent: "left",
                alignItems: "center",                
                display: 'flex',
                gap: 7,
            }}
        >
          <Typography variant="h1" sx={{ color: '#e6dcc6' }}>Are you on the right Track?</Typography>
        </Box>
        <Box
          sx={{
            paddingBottom: 10,
          }}
        >
          <Button variant="contained" size="large">Learn More</Button>
        </Box>
      </Container>

      <Box
        sx={{
          backgroundImage: `url(${home})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          flex: 1,
          // height: "768px",
          // width: "512px",
          backgroundPosition: "center",          
        }}
      />
    </Box>
  );
}

export default Hero;
