import { useState } from 'react'

function Link({code, desc, isVisited, children}) {
  let render = !isVisited ? <a href={code}>{desc} {children}</a> : desc
  return (
    <>
      <li>{render}</li>
    </>
  )
}

export default Link
