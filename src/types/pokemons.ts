export type PokemonsProps = {
  entry_number: number
  pokemon_species: {
    name: string
    url: string
  }
}

export interface Props {
  pokemons: PokemonsProps[]
}
