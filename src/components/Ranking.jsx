import { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
export default function Ranking(){

  const [rankings, setRanking] = useState([]);

  useEffect(()=> {
    const url = "http://localhost:3000/api/ranking"
    fetch(url,{
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
    }
    })
    .then( response => response.json() )
    .then( data => { 
      setRanking(data)
    })
    .catch(( error ) => {
    console.log(error)
    })
  }, [])

  return (
    <>
    {/* <div>
      <ul>
      {rankings.map((ranking, index) => (
        <li key={index}>
        {ranking.name} - {ranking.totalGames}
        </li>
        ))}
        </ul>
        </div> */}

    <div>
      <h1>Ranking de jugadores </h1>
      <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>Nombre del jugador</TableCell>
          <TableCell align="right">Id del Jugador</TableCell>
          <TableCell align="right">Total de partidas</TableCell>
          <TableCell align="right">Porcentaje de victorias</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rankings.map((ranking) => (
          <TableRow
            key={ranking.name}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">{ranking.name}</TableCell>
            <TableCell align="right">{ranking.Player_ID}</TableCell>
            <TableCell align="right">{ranking.totalGames}</TableCell>
            <TableCell align="right">{ranking.succes_rate}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  </div>
  </>
  )
}


// function createData(Player_name, Player_ID, totalGames, succes_rate) {
//   return { Player_name, Player_ID, totalGames, succes_rate };
// }

// const rows = [//   return { Player_name, Player_ID, totalGames, succes_rate};
//   // // }
//   createData('Player 1', 1, 0, 100),
//   createData('Player 2', 2, 0, 50),
//   createData('Player 3', 3, 0, 60),
//   createData('Player 4', 4, 0, 75),
//   createData('Player 5', 5, 0, 33),
// ];

// export default function BasicTable() {
//   return (
//     <TableContainer component={Paper}>
//       <Table sx={{ minWidth: 650 }} aria-label="simple table">
//         <TableHead>
//           <TableRow>
//             <TableCell>Player_name</TableCell>
//             <TableCell align="right">Player_ID</TableCell>
//             <TableCell align="right">totalGames</TableCell>
//             <TableCell align="right">succes_rate</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {rows.map((row) => (
//             <TableRow
//               key={row.Player_name}
//               sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
//             >
//               <TableCell component="th" scope="row">
//                 {row.Player_name}
//               </TableCell>
//               <TableCell align="right">{row.Player_ID}</TableCell>
//               <TableCell align="right">{row.totalGames}</TableCell>
//               <TableCell align="right">{row.succes_rate}</TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// }