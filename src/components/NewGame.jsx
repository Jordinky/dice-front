import { useEffect, useState } from "react";



function createNewGame(player_id, dice1, dice2, score){
return (player_id, dice1, dice2, score)
}



export default function NewGame(){
    const [game,setGame] = useState("0");

    useEffect(()=>{
        const url = "http://localhost:3000/api/games/1"
        fetch(url,{
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
        })
        .then(response => {
            createNewGame(response.player_id, response.dice1, response.dice2, response.score)
            setGame(response.data)
        })
    })

    return(
      <section>
        <NewGame />
      </section>

      )
}