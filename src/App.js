import React,{useState,useEffect} from "react"
import NavBar from "./NavBar";
import {Route,Switch} from "react-router-dom"
import Home from "./Home"
import About from "./About"
import TrainerList from "./trainerList";

function App() {
  const [trainers,setTrainers] = useState([])

  useEffect (() => {
      fetch("http://localhost:9292/trainers")
      .then((r)=>r.json())
      .then((trainers)=> setTrainers(trainers))
  }, []) 
 
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
          <TrainerList trainers={trainers}/>
        </Route>
      </Switch>
      
    </div>
  );
}

export default App;
