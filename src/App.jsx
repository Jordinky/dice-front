import React from 'react';
import ThemeToggle from './components/ThemeToggle';
import { Container, Box,Typography } from '@mui/material';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
function App() {
  return (
    <ThemeToggle>
      <Navbar/>
      <Container component="main" sx={{ mt: 8, mb: 2 }}>
        <Box sx={{ my: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Center Content
          </Typography>
          <Typography variant="body1">
            This is the center content of the page. You can add more components or content here.
          </Typography>
        </Box>
      </Container>
      <Footer />
    </ThemeToggle>
  );
}

export default App;
