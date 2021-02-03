import React from 'react'
import { MoveCard } from '../styles/styles'

export default function Move({ data }) {
  return (
    <MoveCard>
      <p>{data.move.name}</p>
    </MoveCard>
  )
}