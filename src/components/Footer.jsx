import React from 'react';
import { Box, Typography,Container } from '@mui/material';
import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone';
const Footer = () => {
  return (
    <Box component="footer" sx={{ py: 3, px: 2, mt: 'auto'}} >
      <Container maxWidth="sm">
<<<<<<< HEAD
        <Typography>
          Made with <FavoriteTwoToneIcon /> by Gonzalo and Jordi
=======
        <Typography variant="body1">Rolling</Typography>
        <Typography variant="body2" color="text.secondary">
          © 2024 by Jordi & Gonzalo
>>>>>>> 49d1ef99244cfd03741ea30bfded29830778faa3
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
