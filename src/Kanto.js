import React,{useState,useEffect} from "react"

function Kanto () {
const [trainers,setTrainers] = useState([])

useEffect (() => {
    fetch("http://localhost:9292/trainers/2")
    .then((r)=>r.json())
    .then((trainers)=> setTrainers(trainers))
}, []) 
return (
    <div>
        {trainers.map((trainer)=> (
            trainer.pokemons.map((pokemon)=>(
                pokemon.name
            ))
        ))}
    </div>
)
}

export default Kanto