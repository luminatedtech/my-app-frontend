import React,{useState,useEffect} from "react"
import NavBar from "./NavBar";
import {Route,Switch} from "react-router-dom"
import Home from "./Home"
import About from "./About"
import TrainerList from "./trainerList";
import TrainerForm from "./trainerForm";
function App() {
  const [trainers,setTrainers] = useState([])
  function handleDeleteTrainer (deletedTrainer) {
    const updatedTrainer = trainers.filter((trainer)=>trainer.id !== deletedTrainer.id)
    setTrainers(updatedTrainer)
  }
  function handleUpdateTrainer (updatedTrainer) {
    const updatedTrainers = trainers.map((trainer)=> {
        if (trainer.id === updatedTrainer.id) {
            return updatedTrainer;
        } else {
            return trainer;
        }
    })
    setTrainers(updatedTrainers)
}
  function onAddTrainer (addedTrainer) {
    setTrainers([...trainers,addedTrainer])
  }
  useEffect (() => {
      fetch("http://localhost:9292/trainers")
      .then((r)=>r.json())
      .then((trainers)=> setTrainers(trainers))
  }, []) 

console.log(trainers)
  return (
    <div className="App">
      <NavBar/>
      <Switch>
        <Route exact path = "/">
          <Home/>
        </Route>
        <Route exact path = "/about">
          <About/>
        </Route>
        <Route exact path = "/trainers">
          <TrainerList  onUpdateTrainer={handleUpdateTrainer} onDeleteTrainer ={handleDeleteTrainer} trainers={trainers}/>
        </Route>
        <Route exact path ="/trainerForm">
          <TrainerForm onAddTrainer={onAddTrainer} />
        </Route>
      </Switch>
      
    </div>
  );
}

export default App;
