
import { useStateValue } from "../Players/AppProvider";


export default function CreateGame(){
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
        <h4>Te sientes con suerte?</h4>
        <h4>Haz click en "Nueva partida" y tira los dados! 🎲🎲</h4>
            <div className="login-form">
                <form onSubmit={handleSubmit}>
                    <button type="submit">Nueva partida</button>
                </form>
            </div>
            <section className='results'>
            </section>
        </div>
  )
}
