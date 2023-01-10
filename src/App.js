import React from "react"
import NavBar from "./NavBar";
import {Route,Switch} from "react-router-dom"
import Home from "./Home"
import About from "./About"
import Kanto from "./Kanto"
import Johto from "./Johto";
import Hoenn from "./Hoenn";
function App() {
 
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
        <Route exact path = "/trainers/kanto">
          <Kanto/>
        </Route>
        <Route exact path = "/trainers/johto">
          <Johto/>
        </Route>
        <Route exact path = "/trainers/hoenn">
          <Hoenn/>
        </Route>
      </Switch>
      
    </div>
  );
}

export default App;
