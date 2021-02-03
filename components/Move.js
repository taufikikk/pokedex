import React from 'react'
import { MoveCard } from '../styles/styles'

export default function Move({ data }) {
  console.log(data)
  return (
    <MoveCard>
      <p>{data.move.name}</p>
    </MoveCard>
  )
}