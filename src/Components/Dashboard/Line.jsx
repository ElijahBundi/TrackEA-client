import React from 'react';
import Header from '../utils/Header';
import LineChart from '../utils/LineChart';
import { Box } from '@mui/material';

function Line() {
  return (
    <Box m='20px' >
        <Header title='Line Chart' subtitle='Simple Line Chart' />
        <Box height='75vh' >
            <LineChart />
        </Box>
    </Box>
  )
}

export default Line