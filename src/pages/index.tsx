import React from 'react'
import { GetStaticProps } from 'next'
import { PokemonsProps } from 'types/pokemons'

interface Props {
  pokemons: PokemonsProps[]
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pokemons = await fetch('https://pokeapi.co/api/v2/pokedex/2/')
    .then((response) => {
      if (response) {
        return response.json()
      }
    })
    .then((pokemonsObject) => {
      return pokemonsObject.pokemon_entries
    })
    .catch(error => console.log(error))
  return {
    props: {
      pokemons
    }
  }
}

const Home: React.FC<Props> = (props: Props) => {
  const { pokemons } = props
  return (
    <div>
      <h1>Pokédex | Lucas Tamir</h1>
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
