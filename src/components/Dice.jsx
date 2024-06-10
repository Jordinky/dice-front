import Dice from "react-dice-roll"

import { useEffect, useState } from "react"

export default function Dices(){

    const [dice,setDice] = useState("0");

    useEffect(()=>{
        const url = "http://localhost:3000/api/players/1"
        fetch(url,{
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        })
        .then(response => {
          console.log(response.data)
          setDice(response.data)
        })

        
    },[])
      return(
        <Dice cheatValue = {dice}/>
      )
}