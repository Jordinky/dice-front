import React from 'react';
import ThemeToggle from './components/ThemeToggle';
import { Container, Box,Typography } from '@mui/material';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Dice from './components/Dice'


function App() {
  return (
    <ThemeToggle>
      <Navbar/>
      <Container component="main" sx={{ mt: 8, mb: 2 }}>
          <Dice/>
      </Container>
      <Box display="flex" justifyContent="center" alignItems="center">
        <Footer />
      </Box>

    </ThemeToggle>
  );
}

export default App;
