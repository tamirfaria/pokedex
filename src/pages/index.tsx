import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { PokemonsProps } from 'types/pokemons'

const Home: React.FC = () => {
  const [pokemons, setPokemons] = useState<PokemonsProps[]>([])
  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokedex/2/')
      .then(response => {
        if (response.data.pokemon_entries) {
          setPokemons(response.data.pokemon_entries)
        }
      })
      .catch(erro => console.log(erro))
  }, [])

  return (
    <div>
      Pokédex | Lucas Tamir
      <ul>
        {pokemons.map((pokemon, index) => (
          <div key={pokemon.entry_number}>
            <li style={{ listStyle: 'none' }}>
              <p>
                {pokemon.entry_number} - <strong>{pokemon.pokemon_species.name}</strong>
              </p>
            </li>
          </div>
        ))}
      </ul>
    </div>
  )
}

export default Home
