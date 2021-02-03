import React, { useState, useEffect } from 'react'
import { Container, DetailCard, MoveContainer, DetailContainer, StatusContainer, ButtonCatch } from '../../styles/styles'
import { useRouter } from 'next/router'
import { gql, useQuery } from '@apollo/client'
import { Move, Type } from '../../components/'
import { set } from 'idb-keyval'
import { CircleLoading } from 'react-loadingg'

const GET_POKEMON = gql`
query pokemon($name: String!) {
  pokemon(name: $name) {
    id
    name
    sprites {
      front_default
    }
    moves {
      move {
        name
      }
    }
    types {
      type {
        name
      }
    }
    message
    status
  }
}
`

export default function Detail() {
  const router = useRouter()
  const { name } = router.query
  const { data, error, loading } = useQuery(GET_POKEMON, {
    variables: { name }
  })
  const [detail, setDetail] = useState({
    name: "",
    sprites: {},
    moves: [],
    types: []
  })
  const [myPokemons, setMyPokemons] = useState([{ name: detail.name }])

  useEffect(() => {
    if (!loading) {
      setDetail(data.pokemon)
    }
  }, [loading])

  function add() {
    const probability = Math.random() < 0.5;
    if (probability) {
      set('pokemons', [...myPokemons, setMyPokemons(myPokemons.concat({ name: detail.name }))]);
    } else {
      console.log('try again')
    }
  }

  if (loading) return <CircleLoading />
  if (error) return <div><h1>Internal Server Error</h1></div>
  return (
    <Container>
      <DetailContainer>
        <DetailCard>
          <h1>{detail.name}</h1>
          <img src={detail.sprites.front_default} alt={detail.name}></img>
          {detail.types.map((type, i) => {
            return <Type key={i} data={type}></Type>
          })}
        </DetailCard>
        <StatusContainer>
          <h1>Moves</h1>
          <MoveContainer>
            {detail.moves.map((move, i) => {
              return <Move key={i} data={move}></Move>
            })}
          </MoveContainer>
        </StatusContainer>
      </DetailContainer>
      <ButtonCatch>
        <buton onClick={add}><p>Catch!</p></buton>
      </ButtonCatch>
    </Container>
  )
}