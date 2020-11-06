import React from 'react'

function SearchForm(props) {

    return (
        <form>
            <input type="search" onChange={props.onInputItemChange}></input>
            <button type="button" onClick={props.onSearchSubmit}>Find Pokémon</button>
        </form>
    )
}

export default SearchForm;