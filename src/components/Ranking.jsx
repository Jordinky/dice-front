// import Table from '@mui/material/Table';
// import { TableHead } from '@mui/material';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableRow from '@mui/material/TableRow';
import { useEffect,useState } from 'react';


// const createRanking = (
//   Player_name = 'Player name',
//   Player_ID,
//   totalGames,
//   succes_rate
// ) => {
//   return { Player_name, Player_ID, totalGames, succes_rate};
// }

export default function Ranking(){

  const [rankings, getRanking] = useState("0");

  useEffect(()=>{
      const url = "http://localhost:3000/api/ranking"
      fetch(url,{
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then(response => {
        console.log(response.data)
        getRanking(response.data)
      })
  },[])
  return (
  <>
      <h1>Hello dados!</h1>
      <ul>
       {rankings.map((ranking)=>{
          <li>{ranking.Player_ID}</li>
        })}
      </ul> 
  </>
      /*{ <TableContainer >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="right">Player Id</TableCell>
              <TableCell align="right">Player name&nbsp;(g)</TableCell>
              <TableCell align="right">Total games&nbsp;(g)</TableCell>
              <TableCell align="right">Success rate&nbsp;(g)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rankings.map((ranking) => (
              <TableRow
                key={ranking.Player_name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {ranking.name}
                </TableCell>
                <TableCell align="right">{ranking.Player_ID}</TableCell>
                <TableCell align="right">{ranking.totalGames}</TableCell>
                <TableCell align="right">{ranking.succes_rate}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer> }*/
  )
}