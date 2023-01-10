import React,{useState,useEffect} from "react"
import TrainerDetails from "./trainerDetails"

function Johto () {
const [johtoTrainers,setJohtoTrainers] = useState([])

useEffect (() => {
    fetch("http://localhost:9292/trainers/johto")
    .then((r)=>r.json())
    .then((trainers)=> setJohtoTrainers(trainers))
}, []) 
return (
    <div className="trainerContainer">
       {johtoTrainers.map((trainer)=> (
        <TrainerDetails key={trainer.id} title={trainer.title} name={trainer.name} src={trainer.avatar_url} type={trainer.type_id} pokemon={trainer.pokemons}/>
       ))}
    </div>
)
}

export default Johto