import ThemeToggle from './components/ThemeToggle';
import { Container, Box } from '@mui/material';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Ranking from './components/Rankings/Ranking';
import RankingWinners from './components/Rankings/RankingWinners';
import RankingLosers from './components/Rankings/RankingLosers';
import AllPlayers from './components/Players/AllPlayers';
function App() {
  return (
    <ThemeToggle>
      <Navbar/>
      <Container component="main" sx={{ mt: 8, mb: 2 }}>
        <Box sx={{ my: 4 }}>
          {/* <Ranking />
          <RankingWinners />
          <RankingLosers /> */}
          <AllPlayers />
        </Box>
      </Container>
      <Footer />
    </ThemeToggle>
  );
}

export default App;
