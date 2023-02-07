import React,{useRef,useEffect} from "react"

function PokemonDetails ({name,src,type1,type2,level}) {

 const type1Ref = useRef(null)
const type2Ref = useRef(null)

useEffect (()=> {
    
    if (type2!==null) {
        type2Ref.current.className=type2
        
    }
    type1Ref.current.className=type1
   
})
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
                    <td ref={type1Ref} className="typeRow">{type1}</td>
                    {type2 !== null && <td ref={type2Ref} className="typeRow">{type2}</td> }
                    
                </tr>
                
            </table>
           
        </div>
    )
}

export default PokemonDetails