import React from 'react'
import { TypeCard } from '../styles/styles'

export default function Type({ data }) {
  return (
    <TypeCard>
        <p>{data.type.name}</p>
    </TypeCard>
  )
}