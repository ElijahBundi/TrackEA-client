import { Typography } from '@mui/material'
import { Box, Container } from '@mui/system'
import React from 'react'
import home from "../../Assets/About.png";

function About() {
  return (
    <Box
        sx={{
            backgroundImage: `url(${home})`,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: 10,
        }}
    >
        <Box
            sx={{
                paddingBottom: 5,
            }}
        >
            <Typography variant='h1' >About Us</Typography>
        </Box>
        <Container
            sx={{
                maxWidth: '75%',
            }}
        >
            <Typography variant='p'>
                A GPS Tracker and GPS tracking software are the best 
                choice for anyone looking for a way to track the 
                location and position of their vehicles. When it comes 
                to running a business, GPS tracking devices are a 
                valuable tool for helping you keep track of your assets. 
                GPS vehicle trackers are designed to provide you with 
                updates about the location of the car, the speed at 
                which it’s traveling, and more, depending on the system 
                and device you install. Fill out the form above to get 
                free quotes from top rated suppliers who can help your business.
            </Typography>
        </Container>
    </Box>
  )
}

export default About