import Dice from "react-dice-roll"
import { Box } from "@mui/material";
import { useStateValue } from "../Players/AppProvider";
import CreateGame from "./CreateGame";


export default function Dices(){
    const {state} = useStateValue()
    
      return(
        <div className="rolling_dices">
          <Box sx={{ my: 1 }} display="flex" justifyContent="center" alignItems="center">
            <Dice cheatValue={state.dice1} size = {150} margin={35}/>
            <Dice cheatValue={state.dice2} size = {150} margin={35}/>
          </Box>
          <Box sx={{ my: 2 }} display="flex" justifyContent="center" alignItems="center" >
            <CreateGame />
          </Box>
          
        </div>
      )
}