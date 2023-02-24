import React from 'react';
import Header from '../utils/Header';
import BarChart from '../utils/BarChart';
import { Box } from '@mui/material';

function Bar() {
  return (
    <Box m='20px' >
        <Header title='Bar Chart' subtitle='Simple Bar Chart' />
        <Box height='75vh' >
            <BarChart />
        </Box>
    </Box>
  )
}

export default Bar