import React, { useEffect, useState } from 'react'
import { values } from 'idb-keyval'
import { Container, PokemonContainer } from '../../styles/styles';
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
          <PokemonList key={i} data={pokemon}></PokemonList>
        ))}
      </PokemonContainer>
    </Container>
  )
}