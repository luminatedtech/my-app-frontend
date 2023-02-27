import React from "react"

function PokemonDetails ({name,src,type1,type2,level}) {



    return (
        <div className="float-child">
            <h2 className="center"> {name} </h2>
            <img
                alt={name}
                src={src}
                className="pokemonImage"
            />
            <h2>Level:{level}</h2>
            <table className="typeTable">
                <tr>
                    <td  className={type1}>{type1}</td>
                    {type2 !== null && <td  className={type2}>{type2}</td> }
                    
                </tr>
                
            </table>
           
        </div>
    )
}

export default PokemonDetails