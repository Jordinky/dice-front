import Dice from "react-dice-roll"
import { useEffect, useState } from "react"
import { Box, Button } from "@mui/material";


export default function Dices(){

    const [dice,setDice] = useState("0");

    useEffect(()=>{
        const url = "http://localhost:3000/api/games/1"
        fetch(url,{
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        })
        .then( response => response.json() )
        .then( data => { 
          setDice(data)
          console.log(data[0].dice1)
        })
        .catch(( error ) => {
        console.log(error)
        })
    },[])
      return(
        <Box sx={{ my: 4 }} display="flex" justifyContent="center" alignItems="center" minHeight="63vh" >
          {dice[0] && <Dice triggers = "a" cheatValue={dice[0].dice1} size = {200} margin-right={30}/>}
          {dice[0] && <Dice triggers = "a" cheatValue={dice[0].dice2} size = {200} margin-left={30}/>}
        </Box>
      )
}