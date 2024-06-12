import React from 'react';
import { Box, Typography,Container } from '@mui/material';

const Footer = () => {
  return (
    <Box component="footer" sx={{ py: 3, px: 2, mt: 'auto', backgroundColor: (theme) => theme.palette.grey[200] }}>
      <Container maxWidth="sm">
        <Typography variant="body1">Rolling</Typography>
        <Typography variant="body2" color="text.secondary">
          © 2024 by Jordi & Gonzalo
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
