import { useState } from 'react';
import { useStateValue } from "../Players/AppProvider";

export default function CreateGame(){

    const [playerID, setPlayerID] = useState(null);
    const [dice1, setDice1] = useState(0);
    const [dice2, setDice2] = useState(0);
    const {state,dispatch} = useStateValue();
    
    const handleSubmit = async (event) => {
    const url = `http://localhost:3000/api/games/${state.id}`
        
    event.preventDefault(); 
    try{
        const response = await fetch(url,{
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            }
        });
        if (response.ok){
            const data = await response.json()
            console.log(data)
            if (data ) {
                console.log("dados"+data.dice1,data.dice2)
                setDice1(data.dice1)
                setDice2(data.dice2)
                dispatch({
                    type: 'GETDICEVAL',
                    payload: data
                })
                console.log('Partida creada con éxito')
                } else {
                console.log(url)
                console.log('Error al crear la partida')
                }
            }  
    }catch(error){
        console.log(error)
    }

    }

    return (
        <div className='NewPlayer'>
        <h1>Jugadores 👤</h1>
            <div className="login-form">
                <form onSubmit={handleSubmit}>
                    <h2>Tirar una partida </h2>
                    <button type="submit">I feel lucky!</button>
                </form>
            </div>
            <section className='results'>
            <h2>Resultados:</h2>
            <h3 style={{display: 'inline-block'} }>{dice1}</h3>
            <span>-</span>
            <h3 style={{display: 'inline-block'} }>{dice2}</h3>
            </section>
        </div>
  )
}
