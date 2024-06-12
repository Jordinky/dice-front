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
        .then(response => {
          console.log(response.data)
          setDice(response)
        })
    },[])
      return(
        <Box sx={{ my: 4 }} display="flex" justifyContent="center" alignItems="center" minHeight="63vh">
          <Dice cheatValue={dice.dice1}/>
          <Dice cheatValue={dice.dice2}/>
        </Box>
      )
}