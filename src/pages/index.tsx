import React from 'react'
import Link from 'next/link'
import Header from './header'
import { GetStaticProps } from 'next'
import { Props } from 'types/pokemons'
import styles from './home.module.scss'

const Home: React.FC<Props> = (props: Props) => {
  const { pokemons } = props
  return (
    <div>
      <Header />
      <section className={styles.container}>
        <div className={styles.posts}>
          {pokemons.map((pokemon) => (
            <div className={styles.post} key={pokemon.entry_number}>
              <div className={styles.postContent}>
                <Link href={`pokemon/${pokemon.entry_number}`}>
                  <a>
                    <p>{pokemon.entry_number} - {pokemon.pokemon_species.name}</p>
                  </a>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
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

export default Home
