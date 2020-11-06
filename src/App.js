import SearchForm from './SearchForm'
import Results from './Results'
import React from 'react'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      pokemon: [],
      displayPokemon: false,
      searchInput: ''
    }
  }

  async 

  handleInputItemChange = (e) => {
    e.preventDefault()
    this.setState({searchInput: e.target.value})
  }

  async handleSearchSubmit() {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${this.state.searchInput}`)
    const json = await response.json()
    this.setState({pokemon: json, displayPokemon: true})
  }

  render(){
    let results = null
    
    if (this.state.displayPokemon === true) {
               results= <Results 
               pokemon={this.state.pokemon} />
        }

    return (
    <div>
      <SearchForm 
      onInputItemChange={this.handleInputItemChange} 
      onSearchSubmit={this.handleSearchSubmit.bind(this)} />
      {results}
    </div>

    )
  }
}

export default App;
