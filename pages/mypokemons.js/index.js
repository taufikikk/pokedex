import React, { useEffect, useState } from 'react'
import { values } from 'idb-keyval'
import { Container, PokemonCard, PokemonContainer } from '../../styles/styles';
import LazyLoad from 'react-lazyload';
import { PokemonList } from '../../components';

export default function Home() {

  const [myPokemons, setMyPokemons] = useState([])

  useEffect(() => {
    values().then((values) => setMyPokemons(values));
  }, [])

  return (
    <Container>
      <PokemonContainer>
        {myPokemons.map((pokemon, i) => (
          <LazyLoad
            key={i}
            height={100}
            offset={[100, 100]}
            placeholder="Loading"
          >
            <PokemonCard>
              <PokemonList key={i} data={pokemon}></PokemonList>
              <h1>{pokemon.custom_name}</h1>
            </PokemonCard>
          </LazyLoad>
        ))}
      </PokemonContainer>
    </Container>
  )
}