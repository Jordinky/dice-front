import { useState } from 'react';

export default function CreateGame(){

    const [playerID, setPlayerID] = useState('');
    const [dice1, setDice1] = useState(0);
    const [dice2, setDice2] = useState(0);
    
    const handleSubmit = async (event) => {
    const url = `http://localhost:3000/api/games/${playerID}`
        
    event.preventDefault(); 

    fetch(url,{
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        }
    })
    .then( response => {
        if (response.ok ) {
            console.log('Partida creada con éxito')
            } else {
            console.log('Error al crear la partida')
            }
        return response.json()
    })
    .then( data => { 
        console.log(data)
        setDice1(data.dice1)
        setDice2(data.dice2)
    })
    .catch(( error ) => {
        console.log(error)
        alert('Error al crear la partida')
    })
    }

    return (
        <div className='NewPlayer'>
        <h1>Jugadores 👤</h1>
            <div className="login-form">
                <form onSubmit={handleSubmit}>
                    <h2>Tirar una partida </h2>
                    <input
                    type="text"
                    placeholder="ID del jugador"
                    value={playerID}
                    onChange={(e) => setPlayerID(e.target.value)}
                    />
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
