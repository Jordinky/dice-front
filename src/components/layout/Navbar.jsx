import { AppBar,Toolbar, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import Login from '../Players/Login';
import Navigation from './Navigation';
import Box from '@mui/material/Box';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Box sx={{ flexGrow: 4 }}>
        <Toolbar>
            <Grid container spacing={3} direction="row" justifyContent="space-between" alignItems="center"> 
              <Grid item xs>
                <Typography variant="h6" sx={{ flexGrow: 1 }} >
                    Rolling Dices Game
                  </Typography>
              </Grid>
              <Grid item xs={6}>
                <Navigation />
              </Grid>
              <Grid item xs>
                <Login />
              </Grid>
            </Grid>
          </Toolbar>
        </Box>
    </AppBar>
  );
};

export default Navbar;