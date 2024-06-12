import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import TextField from '@mui/material/TextField';
const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
<<<<<<< HEAD
        <Typography variant="h6" sx={{ flexGrow: 1 }} >
          Rolling Dices Game
=======
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Rolling Dices 🎲🎲
>>>>>>> 49d1ef99244cfd03741ea30bfded29830778faa3
        </Typography>
        <TextField label="Username" size = "small" variant="outlined" />
        <Button color="inherit" size = "small">Log In</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;