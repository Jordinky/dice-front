import { useState } from "react"
import TextField from '@mui/material/TextField';
import {Button}  from '@mui/material';
import { useStateValue } from "../Players/PlayerReducer";

export default function Login(){
    const [player,setplayer] = useState(null)
    const [playerError,setPlayerError] = useState(false)
    const {dispatch} = useStateValue();

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
                if(data.data){
                    setplayer(data)
                    setPlayerError(false) 
                    console.log(data.data.name)
                    dispatch({
                        type: 'LOGIN',
                        payload: data.data.name,
                      });
                }else{
                    alert("user doesn't exist")
                }
            }
        }catch(error){
            console.log(error)
        }
    }
    return(
    <>
        <form onSubmit={handleSubmit}>
            <TextField label="Username" color = "primary" size = "small" variant="outlined" required error = {playerError} onChange={e => setplayer(e.target.value)}/>
            <Button color="primary" size = "small" type="submit" variant="outlined">LogIn</Button>
        </form>
    </>
    )
}