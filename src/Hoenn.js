import React, {useState, useEffect} from "react"
import TrainerDetails from "./trainerDetails"
function Hoenn () {
    const [hoennTrainers,setHoennTrainers] = useState([])

useEffect (() => {
    fetch("http://localhost:9292/trainers/hoenn")
    .then((r)=>r.json())
    .then((trainers)=> setHoennTrainers(trainers))
}, []) 
return (
    <div className="trainerContainer">
       {hoennTrainers.map((trainer)=> (
        <TrainerDetails key={trainer.id} title={trainer.title} name={trainer.name} src={trainer.avatar_url} type={trainer.type_id} pokemon={trainer.pokemons}/>
       ))}
    </div>
)

}

export default Hoenn 