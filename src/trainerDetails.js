import React from "react"
import PokemonDetails from "./pokemonDetails"
function TrainerDetails ({name,pokemon,type,src,title}) {
    return (
        <div className="trainerCard">
            <h2>{name}</h2>
            <img 
                src={src}
                alt={name}
                className="trainerImage"
            />
            <p>{title}</p>
            <p>{type}</p>
            <div className="pokemonDetails"> 
                {pokemon.map((pokemon)=>(
                    <PokemonDetails key={pokemon.id} name={pokemon.name} level={pokemon.level} src={pokemon.avatar_url}/>
                ))}
            </div>
        </div>
    )
}

export default TrainerDetails