import React from 'react';
import Header from '../utils/Header';
import PieChart from '../utils/PieChart';
import { Box } from '@mui/material';

function Pie() {
  return (
    <Box m='20px' >
        <Header title='Pie Chart' subtitle='Simple Pie Chart' />
        <Box height='75vh' >
            <PieChart />
        </Box>
    </Box>
  )
}

export default Pie