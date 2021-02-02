import React from 'react'

export default function Move({ data }) {
  console.log(data)
  return (
    <>
        <li>{data.move.name}</li>
    </>
  )
}