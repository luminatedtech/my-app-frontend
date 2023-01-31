import React, {useState} from "react"

function TrainerForm ({onAddTrainer}) {
    const [name,setName]=useState('')
    const [region,setRegion]=useState('')
    const[pokemon,setPokemon]=useState('')
    const [pokemon1,setPokemon1] = useState('')
    const [type1_id, setType1_Id] = useState('')
    const [type2_id, setType2_Id] = useState('')
    const [level,setLevel] =useState('')
    const [avatar_url, setAvatarUrl] = useState('')
    function handleSubmit(e){
        e.preventDefault()
        const trainerData = {
            name: name,
            region: region,
            pokemons_attributes: [{
                name: pokemon1,
                type1_id: type1_id,
                type2_id: type2_id,
                level: level,
                avatar_url: avatar_url,
            }]
        }
        console.log(trainerData)
    
    fetch("http://localhost:9292/trainers",{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body:JSON.stringify(trainerData)
    })
    .then((r)=>r.json())
    .then((newTrainer)=> onAddTrainer(newTrainer))
}
    return (
    <div>
        <h2 className="center">Trainer Form</h2>
        <div className="trainerFormDiv">
            
            <form onSubmit={handleSubmit}>
                <input 
                 className="inputField"
                 name={name}
                 type="text"
                 placeholder="Trainer Name"
                 onChange={(e)=>setName(e.target.value)}
                 />
                 <input 
                 className="inputField"
                 name={region}
                 type="text"
                 placeholder="What region is this Trainer from"
                 onChange={(e)=>setRegion(e.target.value)}
                 /> 
                <input 
                  className="inputField"
                    name={pokemon}
                    type="text"
                    placeholder="How many Pokmeon do they have?"
                    onChange={(e)=>setPokemon(e.target.value)}
                /> 
                <input 
                 className="inputField"
                 name={pokemon1}
                 value={pokemon1}
                 type="text"
                 placeholder="What is the name of his first Pokemon?"
                 onChange={(e)=>setPokemon1(e.target.value)}
                 />
                <input 
                 className="inputField"
                 name={type1_id}
                 type="text"
                 placeholder="Which type is this pokmeon?"
                 onChange={(e)=>setType1_Id(e.target.value)}
                 />
                <input 
                 className="inputField"
                 name={type2_id}
                 type="text"
                 placeholder="If the pokemon has another type, what is it?"
                 onChange={(e)=>setType2_Id(e.target.value)}
                 />
                   <input 
                 className="inputField"
                 name={level}
                 type="text"
                 placeholder="What level is this pokemon?"
                 onChange={(e)=>setLevel(e.target.value)}
                 />
                   <input 
                 className="inputField"
                 name={avatar_url}
                 type="text"
                 placeholder="Give me a photo of this pokemon"
                 onChange={(e)=>setAvatarUrl(e.target.value)}
                 />
                <input
                
                     type="submit"
                     name="submit"
                     value="Submit New Tea"
                     className="submit"
                     />
            </form>
         </div>
    </div>
        
    )
}
export default TrainerForm