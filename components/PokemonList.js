import React from 'react'
import { Fragment } from '../styles/styles'
import Link from 'next/link'
import LazyLoad from 'react-lazyload'

export default function PokemonList({ data }) {
  return (
    <Link href={'detail/' + data.name}>
      <Fragment>
        <LazyLoad
          once={true}
          placeholder="Loading">
          <img src={data.image} alt={data.name}></img>
        </LazyLoad>
      </Fragment>
    </Link>
  )
}