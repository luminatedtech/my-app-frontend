import React from "react"
import PokemonDetails from "./pokemonDetails"
function TrainerDetails ({name,trainer,region,onUpdateTrainer,type,src,title,onDeleteTrainer,pokemon,trainerId,likes}) {
    
    function handleAddLike () {
        fetch(`http://localhost:9292/trainers/${trainer.id}`,{
            method: "PATCH",
            headers: {
                "Content-Type":"application/json",
            },
            body: JSON.stringify({
                likes: likes + 1,
            })
        })
        .then((r)=> r.json())
        .then((updatedTrainer)=> onUpdateTrainer(updatedTrainer))
    }
    function handleDeleteClick() {
        fetch(`http://localhost:9292/trainers/${trainer.id}`,{
            method: "DELETE",
        })
        .then((r)=> r.json())
        .then((trainer)=>onDeleteTrainer(trainer))
        
    }
    console.log(trainerId)
    if (trainerId >= 0 && trainerId <= 35){
    return (
        <div className="trainerCard">
            <h2>{name}</h2>
            <img 
                src={src}
                alt={name}
                className="trainerImage"
            />
            <p>This trainer is the {title} member of the {region} Elite Four </p>
            <p>They specialize with {type} pokemon!</p>
            <div className="buttonDiv">
                <button onClick={handleAddLike} className="likesButton">{likes} ♥ Likes</button> 
                <button className="deleteButton" onClick={handleDeleteClick}> Delete</button>
            </div>
            
            <div className="pokemonDetails"> 
                {pokemon.map((pokemon)=>(
                    <PokemonDetails  key={pokemon} name={pokemon.name} level={pokemon.level} src={pokemon.avatar_url} type1={pokemon.type1_id} type2={pokemon.type2_id} pokemon={pokemon}/>
                ))}
            </div>
        </div>
        )}
     
        return (
            <div className="trainerCard">
            <h2>{name}</h2>
            <img 
                src={src}
                alt={name}
                className="trainerImage"
            />
            <p>This trainer is part of the {region} region! </p>
            <button onClick={handleDeleteClick}>
                Delete
            </button>
            <div className="pokemonDetails"> 
                {pokemon.map((pokemon)=>(
                    <PokemonDetails  key={pokemon} name={pokemon.name} level={pokemon.level} src={pokemon.avatar_url} type1={pokemon.type1_id} type2={pokemon.type2_id} pokemon={pokemon}/>
                ))}
            </div>
        </div>
        )
}

export default TrainerDetails