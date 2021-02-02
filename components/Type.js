import React from 'react'

export default function Type({ data }) {
  console.log(data)
  return (
    <>
        <li>{data.type.name}</li>
    </>
  )
}