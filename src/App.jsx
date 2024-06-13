import ThemeToggle from './components/ThemeToggle';
import { Container, Box } from '@mui/material';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Ranking from './components/Rankings/Ranking';
import RankingWinners from './components/Rankings/RankingWinners';
import RankingLosers from './components/Rankings/RankingLosers';
import AllPlayers from './components/Players/AllPlayers';
import CreatePlayer from './components/Players/CreatePlayer';
import Dice from './components/Dice'
import Welcome from './components/Welcome';
import { StateProvider } from '../src/components/PlayerReducer';

function App() {
  return (
    <ThemeToggle>
      <StateProvider>
      <Navbar/>
      <Welcome />
      <Container component="main" sx={{ mt: 8, mb: 2 }}>
          <Dice/>
      </Container> 
      <Box display="flex" justifyContent="center" alignItems="center">
        <Footer />
      </Box>
      </StateProvider>
    </ThemeToggle>
    
  );
}

export default App;
