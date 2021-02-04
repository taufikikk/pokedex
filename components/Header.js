import React from 'react'
import Link from 'next/link'
import { HeaderStyle, HeaderLeft, HeaderRight } from '../styles/styles'

export default function Header() {
  return (
    <HeaderStyle>
      <header>
        <HeaderLeft>
          <Link href="/">Pokedex</Link>
        </HeaderLeft>
        <HeaderRight>
          <Link href="/mypokemons">My Pokemons</Link>
        </HeaderRight>
      </header>
    </HeaderStyle>
  )
}