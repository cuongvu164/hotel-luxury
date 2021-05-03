import React, { useMemo } from 'react'
import { matchPath } from "react-router-dom";

import Navbar from './../Navbar/Navbar'
import Header from './../Header/Header'


const TopSide = () => {

  const matchedHome = matchPath(window.location.pathname, {
    path: '/',
    exact: true
  })

  console.log('---matchedHome:', matchedHome)

  const shouldShowHeader = useMemo(() => {
    return matchedHome
  }, [matchedHome])

  return (
    <>
      <Navbar />
      { shouldShowHeader && <Header /> }
      
    </>
  )
}

export default TopSide