import React, { useEffect, useState } from 'react'
import { gql, useQuery } from '@apollo/client'
import PokemonList from '../components/PokemonList'
import LazyLoad from 'react-lazyload'
import { CircleLoading } from 'react-loadingg'
import { BtnLoadMore, Container, PokemonCard, PokemonContainer } from '../styles/styles'

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
  const [limit, setLimit] = useState(20)
  const gqlVariables = {
    limit: limit,
    offset: 1,
  };
  const { data, error, loading } = useQuery(GET_POKEMONS, {
    variables: gqlVariables
  })

  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    if (!loading) {
      setPokemons(data.pokemons.results)
    }
  }, [loading, data])

  function loadMore() {
    setLimit(limit + 20)
  }

  if (loading) return <CircleLoading />
  if (error) return <div><h1>Internal Server Error</h1></div>
  return (
    <Container>
      <PokemonContainer>
        {pokemons.map((pokemon, i) => (
          <LazyLoad
            key={i}
            height={100}
            offset={[100, 100]}
            placeholder="Loading"
          >
            <PokemonCard>
              <PokemonList key={i} data={pokemon}></PokemonList>
              <h1>{pokemon.name}</h1>
            </PokemonCard>
          </LazyLoad>
        ))}
      </PokemonContainer>
      <a onClick={loadMore}>
        <BtnLoadMore>
          <p>Load More</p>
        </BtnLoadMore>
      </a>
    </Container>
  )
}