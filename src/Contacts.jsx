import { useReducer, useState, useContext } from 'react'
import HeaderBar from './components/HeaderBar'
import useCounter from './hooks/useCounter'

function Contacts() {
  useCounter();

    return (
        <>
          <HeaderBar></HeaderBar>
          <h1>CONTACTS</h1>
        </>
    )
}

export default Contacts