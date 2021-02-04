import React from 'react'
import { PokemonCard } from '../styles/styles'
import LazyLoad from 'react-lazyload'
import { useRouter } from 'next/router'

export default function PokemonList({ data }) {
  const router = useRouter()

  function handleClick(e) {
    e.preventDefault()
    router.push({
      pathname: "/detail",
      query: { name: data.name},
    })
  }

  return (
    <a onClick={handleClick}>
      <PokemonCard>
        <LazyLoad
          once={true}
          placeholder="Loading">
          <img src={data.image} alt={data.name}></img>
        </LazyLoad>
        <h1>{data.custom_name ? data.custom_name : data.name}</h1>
      </PokemonCard>
    </a>
  )
}