import React from 'react'
import { PokemonCard } from '../styles/styles'
import Link from 'next/link'
import LazyLoad from 'react-lazyload'

export default function PokemonList({ data }) {
  return (
    <Link href={'detail/' + data.name}>
      <PokemonCard>
        <LazyLoad
          once={true}
          placeholder="Loading">
          <img src={data.image} alt={data.name}></img>
        </LazyLoad>
        <h1>{data.name}</h1>
      </PokemonCard>
    </Link>
  )
}