import React from 'react'
import './App.css'

function Results(props){
    let pokemon = props.pokemon
    let abilities = pokemon.abilities.map(each =>(
        <li>
         {each.ability.name}       
        </li>
    ))
    // let abilities = pokemon.abilities.map(el => el.ability.name)

    console.log(pokemon.abilities)

    
    return(
        <ul class="list">
            <li>Name: {pokemon.name}</li>
            <li>ID: {pokemon.id}</li>
            <ul> Abilities:
                {abilities}
            </ul>
        </ul>
    )
}

export default Results;