import React, { useEffect } from 'react'
import styles from '../styles/Home.module.css'
import { gql, useQuery } from '@apollo/client';
import PokemonList from '../components/PokemonList'
import Footer from '../components/Footer';
import Header from '../components/Header';
import HeadStatus from '../components/HeadStatus'

const GET_POKEMONS = gql`
query pokemons($limit: Int, $offset: Int) {
  pokemons(limit: $limit, offset: $offset) {
    count
    next
    previous
    status
    message
    results {
      url
      name
      image
    }
  }
}
`

export default function Home() {
  const { data, error, loading } = useQuery(GET_POKEMONS)
  console.log(data)

  if (loading) return <div>Loading</div>
  if (error) return <div><h1>Internal Server Error</h1></div>
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div>
          {data.pokemons.results.map((pokemon, i) => {
            return <PokemonList key={i} data={pokemon}></PokemonList>
          })}
        </div>
      </main>
    </div>
  )
}