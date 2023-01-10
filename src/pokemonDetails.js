import React from "react"

function PokemonDetails ({name,src,type,level}) {
    return (
        <div className="float-child">
            <h2 className="center"> {name} </h2>
            <img
                alt={name}
                src={src}
                className="pokemonImage"
            />
            <h2>Level:{level}</h2>
            <p>{type}</p>
        </div>
    )
}

export default PokemonDetails