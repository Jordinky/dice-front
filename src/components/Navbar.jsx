import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import TextField from '@mui/material/TextField';
const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }} >
          Rolling Dices Game
        </Typography>
        <TextField label="Username" size = "small" variant="outlined" />
        <Button color="inherit" size = "small">Log In</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;