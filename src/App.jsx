import ThemeToggle from './components/ThemeToggle';
import { Container, Box } from '@mui/material';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
<<<<<<< HEAD
import Dice from './components/Dice'


=======
import Ranking from './components/Rankings/Ranking';
import RankingWinners from './components/Rankings/RankingWinners';
import RankingLosers from './components/Rankings/RankingLosers';
import AllPlayers from './components/Players/AllPlayers';
>>>>>>> 49d1ef99244cfd03741ea30bfded29830778faa3
function App() {
  return (
    <ThemeToggle>
      <Navbar/>
      <Container component="main" sx={{ mt: 8, mb: 2 }}>
<<<<<<< HEAD
          <Dice/>
=======
        <Box sx={{ my: 4 }}>
          {/* <Ranking />
          <RankingWinners />
          <RankingLosers /> */}
          <AllPlayers />
        </Box>
>>>>>>> 49d1ef99244cfd03741ea30bfded29830778faa3
      </Container>
      <Box display="flex" justifyContent="center" alignItems="center">
        <Footer />
      </Box>

    </ThemeToggle>
  );
}

export default App;
