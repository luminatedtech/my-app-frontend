import React,{useState,useEffect} from "react"
import TrainerDetails from "./trainerDetails"

function Kanto () {
const [kantoTrainers,setKantoTrainers] = useState([])

useEffect (() => {
    fetch("http://localhost:9292/trainers/kanto")
    .then((r)=>r.json())
    .then((trainers)=> setKantoTrainers(trainers))
}, []) 
return (
    <div className="trainerContainer">
       {kantoTrainers.map((trainer)=> (
        <TrainerDetails key={trainer.id} title={trainer.title} name={trainer.name} src={trainer.avatar_url} type={trainer.type_id} pokemon={trainer.pokemons}/>
       ))}
    </div>
)
}

export default Kanto