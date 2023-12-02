import Header from '../components/Header'
import HeaderMarks from '../components/HeaderMarks'
import Navbar from '../components/Navbar'
import Features from '../components/Features'
import React from 'react'
import Succes from '../components/Succes'

function home() {
  return (
    <>
        <Navbar/>
        <Header/>
        <HeaderMarks/>
        <Features/>
        <Succes/>
    </>
  )
}

export default home