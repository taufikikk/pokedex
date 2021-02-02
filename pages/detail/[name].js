import React, { useState, useEffect } from 'react'
import { Combined } from '../../styles/styles'
import { useRouter } from 'next/router'
import { gql, useQuery } from '@apollo/client';
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import HeadStatus from '../../components/HeadStatus'
import Move from '../../components/Move'
import Type from '../../components/Type'
import { set, del } from "idb-keyval";

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
  }, [data])


  function add() {
    const probability = Math.random() < 0.5;
    console.log(probability)

    console.log('ok')
    if (probability) {
      set('pokemons', [...myPokemons, setMyPokemons(myPokemons.concat({ name: detail.name }))]);
    } else {
      console.log('coba lagi')
    }
  }


  if (loading) return <div>Loading</div>
  if (error) return <div><h1>Internal Server Error</h1></div>
  return (
    <>
      <HeadStatus></HeadStatus>
      <Header></Header>
      <Combined>
        <h1>{detail.name}</h1>
        <img src={detail.sprites.front_default}></img>
        <h1>Moves</h1>
        <ul>
          {detail.moves.map((move, i) => {
            return <Move key={i} data={move}></Move>
          })}
        </ul>
        <h1>Types</h1>
        <ul>
          {detail.types.map((type, i) => {
            return <Type key={i} data={type}></Type>
          })}
        </ul>
        <buton onClick={add}>Button</buton>
      </Combined>
      <Footer></Footer>
    </>
  )
}