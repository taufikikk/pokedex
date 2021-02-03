import React, { useEffect, useState } from 'react'
import { gql, useQuery } from '@apollo/client'
import PokemonList from '../components/PokemonList'
import LazyLoad from 'react-lazyload'
import { CircleLoading } from 'react-loadingg'
import { PokemonContainer } from '../styles/styles'

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

  if (loading) return <CircleLoading />
  if (error) return <div><h1>Internal Server Error</h1></div>
  return (
    <PokemonContainer>
      {data.pokemons.results.map((pokemon, i) => (
        <LazyLoad
          key={i}
          height={100}
          offset={[100, 100]}
          placeholder="Loading"
        >
          <PokemonList key={i} data={pokemon}></PokemonList>
        </LazyLoad>
      ))}
    </PokemonContainer>
  )
}