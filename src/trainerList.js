import React from "react"
import TrainerDetails from "./trainerDetails"
function TrainerList ({trainers,onDeleteTrainer,onAddTrainer,onUpdateTrainer}) {
    
  
    return (
        
        <div className="trainerContainer">
       {trainers.map((trainer)=> (
        <TrainerDetails onUpdateTrainer={onUpdateTrainer} key={trainer} onAddTrainer={onAddTrainer} onDeleteTrainer ={onDeleteTrainer} trainerId={trainer.id} trainer={trainer} title={trainer.title} name={trainer.name} src={trainer.avatar_url} type={trainer.trainer_type} pokemon={trainer.pokemons} region={trainer.region} likes ={trainer.likes}/>
       ))}
    </div>
    )
}

export default TrainerList