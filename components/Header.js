import React from 'react'
import Link from 'next/link'
import { HeaderStyle } from '../styles/styles'

export default function Header() {
  return (
    <HeaderStyle>
      <header>
        <Link href="/">Pokedex</Link>
      </header>
    </HeaderStyle>
  )
}