import Dice from "react-dice-roll"
import { useEffect, useState } from "react"
import { Box } from "@mui/material";
import { useStateValue } from "../Players/AppProvider";


export default function Dices(){
    const {state,dispatch} = useStateValue()
    
      return(
        <div className="rolling_dices">
        <Box sx={{ my: 2 }} display="flex" justifyContent="center" alignItems="center" minHeight="10vh" >
        <Dice cheatValue={state.dice1} size = {200} margin={50}/>
        <Dice cheatValue={state.dice2} size = {200} margin={50}/>
        </Box>
        <h4>Presiona Enter, para lanzar una partida...</h4>
        </div>
      )
}