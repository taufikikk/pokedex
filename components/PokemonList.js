import React from 'react'
import { Combined } from '../styles/styles'
import Link from 'next/link'
export default function PokemonList({ data }) {
  return (
    <Link href={'detail/' + data.name}>
      <Combined>
        <img src={data.image}></img>
        <h1>{data.name}</h1>
      </Combined>
    </Link>
  )
}