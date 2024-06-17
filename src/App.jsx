import ThemeToggle from './components/layout/ThemeToggle';
import { Container, Box } from '@mui/material';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import AllPlayers from './components/Players/AllPlayers';
//import CreatePlayer from './components/Players/CreatePlayer';
import Dice from './components/Games/Dice'
import Welcome from './components/layout/Welcome';
import { StateProvider } from './components/Players/AppProvider';
import DeleteGames from './components/Players/DeleteGames';
import CreateGame from './components/Games/CreateGame';


function App() {
  return (
    <ThemeToggle>
      <StateProvider>
      <Navbar/>


      <Welcome />
      <Container component="main">
          <Dice/>
      </Container> 
      <Container component="main">
        <Box sx={{ my: 4 }}>
          <CreateGame />
          <DeleteGames />
          {/* <Ranking />
          <RankingWinners />
          <RankingLosers /> */}
          <AllPlayers />
          {/* <CreatePlayer /> */}
        </Box>
      </Container>
      <Box display="flex" justifyContent="center" alignItems="center">
        <Footer />
      </Box>
      </StateProvider>
    </ThemeToggle>
    
  );
}

export default App;
