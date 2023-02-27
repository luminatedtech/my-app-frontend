import React from "react";

function About (){
    return (
        <div className="aboutPage">
            <h1> This website is to showcase the pokemon that the strongest trainers in each region use.</h1>
            <h2>Note: As some games are remade and certain trainers reappear, the teams shown will be from the latest games.</h2>
            <h3>Starting from the franchise's first game in 1996, the series and game has become a household name, garnering fans from all around the world. 27 years later, the series has had many games published and as a result, created one of the most expansive game worlds. With these new games, come new trainers and pokemon that the player must encounter and defeat. In each region, there is always a set of elite trainers that the player must defeat to complete the game. As these trainers are arguably the strongest in each version of the game, it is useful infomration to know what kinds of pokemon they use. Here, we display each pokemon as well as their types and levels so players can prepare accordingly. </h3> 
            <h4> As these trainers are prominent as fan favorites, we have also added a feature, where you can vote on each trainer's popularity.</h4>
            <div className="center"> 
                <img className="aboutPokemon" alt="pokemon"src="./pokemonImages/aboutPokemon.jpeg"/>
            </div>
        </div>
    )
}

export default About