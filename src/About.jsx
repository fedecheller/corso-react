import { useReducer, useState, useContext } from 'react'
import HeaderBar from './components/HeaderBar'
import Contact from './Contact'

function About() {
    return (
        <>
          <HeaderBar></HeaderBar>
          <h1>ABOUT</h1>

          <Contact></Contact>
        </>
    )
}

export default About