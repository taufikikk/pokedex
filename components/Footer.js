import React from 'react'
import { FooterStyle } from '../styles/styles'

export default function Footer() {
  return (
    <FooterStyle>
      <footer>
        Taufiq Ismail | {(new Date().getFullYear())}
      </footer>
    </FooterStyle>
  )
}
