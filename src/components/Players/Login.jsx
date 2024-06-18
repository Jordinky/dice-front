import { useState } from "react"
import TextField from '@mui/material/TextField';
import {Button}  from '@mui/material';
import { useStateValue } from "./AppProvider";
import Box from "@mui/material/Box";
import { AccountCircle } from "@mui/icons-material";

export default function Login(){
    const [player,setplayer] = useState("")
    const [playerError,setPlayerError] = useState(false)
    const {state,dispatch} = useStateValue();

    const url = `http://localhost:3000/api/players/${player}`

    const handleSubmit = async (event) => {
        event.preventDefault()
        if (player == '') {
            setPlayerError(true)
            alert("pon tu nombre de usuario, FORRO HIJO DE RE MIL PUTAS")
        }
        try{
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json',
                }
              });
            if (response.ok) {
                const data = await response.json();
                console.log(data)
                if(data.data){
                    setplayer(data)
                    setPlayerError(false) 
                    console.log(data.data.name)
                    dispatch({
                        type: 'LOGIN',
                        payload: data.data,
                      });
                }else{
                    alert("user doesn't exist")
                }
            }
        }catch(error){
            console.log(error)
        }
    }

    function handleLogout (){
        dispatch({
            type: 'LOGOUT',
          });
    }
    return(
    <>
        <form onSubmit={handleSubmit} >
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                <TextField label="Player ID" color = "secondary" size = "small" variant="outlined" required error = {playerError} onChange={e => setplayer(e.target.value)}/>
                <Button color="secondary" size = "small" type="submit" variant="outlined" style={{marginLeft: 25}}>LogIn</Button>
            </Box>
        </form>
    </>
    )
}