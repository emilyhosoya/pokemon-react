import React from 'react'

function Results(props){
    let pokemon = props.pokemon
    
    // let abilities = pokemon.abilities.map(el => el.ability.name)

    console.log(pokemon.abilities)

    
    return(
        <ul>
            <li>Name: {pokemon.name}</li>
            <li>ID: {pokemon.id}</li>
            <ul> Abilities:
                {pokemon.abilities.forEach(el => {
                <li>{el.ability.name}</li>})}
            </ul>
        </ul>
    )
}

export default Results;