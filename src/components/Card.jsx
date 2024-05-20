import { useState } from 'react'

function Card({item}) {
  
  return (
    <>
      <p>Code:{item.code} Name:{item.name}</p>
    </>
  )
}

export default Card
