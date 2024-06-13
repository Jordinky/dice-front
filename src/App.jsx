import ThemeToggle from './components/ThemeToggle';
import { Container, Box } from '@mui/material';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Dice from './components/Dice'
import Welcome from './components/Welcome';


function App() {
  return (
    <ThemeToggle>
      <Navbar/>     
      <Container component="main" sx={{ mt: 3, mb: 1 }}>
        <Welcome></Welcome>
          <Dice/>
      </Container>
      <Box display="flex" justifyContent="center" alignItems="center">
        <Footer />
      </Box>
    </ThemeToggle>
  );
}

export default App;
