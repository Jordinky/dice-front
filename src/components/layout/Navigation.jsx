import { Link } from "@mui/material";
import Box from "@mui/material/Box";

export default function Navigation(){


    return(
      <Box sx={{ display: 'flex', alignItems: 'flex-end', mx: 2}}>
          <Link href = "/" sx ={{mx:4}}>Home</Link>
          <Link href = "/ranking" sx ={{mx:4}}>Ranking</Link>
          <Link href = "/rankingWinners" sx ={{mx:4}}>Winners</Link>
          <Link href = "/rankingLosers" sx ={{mx:4}}>Losers</Link>
        </Box>
    );
}