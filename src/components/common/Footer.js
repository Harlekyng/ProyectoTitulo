import React from 'react';
import { Box, Typography } from '@mui/material';

function Footer() {
  return (
    <Box mt={5} bgcolor="text.secondary" p={3}>
      <Typography variant="body2" color="white" align="center">
        © 2024 FinanZApp
      </Typography>
    </Box>
  );
}

export default Footer;
