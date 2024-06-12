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

function App() {
  return (
    <ThemeToggle>
      <Navbar/>
      <Container component="main" sx={{ mt: 10, mb: 2 }}>
        <Box sx={{ my: 4 }}>
          {/* <Ranking />
          <RankingWinners />
          <RankingLosers /> */}
          {/* <CreatePlayer /> */}
          {/* <AllPlayers /> */}
        </Box>
      </Container>
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
