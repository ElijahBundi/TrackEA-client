import React from 'react';
import Header from '../utils/Header';
import { tokens } from '../../theme';
import { useTheme } from '@mui/material';
import GeographyChart from '../utils/GeographyChart';
import { Box } from '@mui/material';

function Geography() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode)

  return (
    <Box m='20px' >
        <Header title='Geography Chart' subtitle='Simple Geography Chart' />
        <Box height='75vh' border={`1px solid ${colors.grey[100]}`} borderRadius='4px' >
            <GeographyChart />
        </Box>
    </Box>
  )
}

export default Geography