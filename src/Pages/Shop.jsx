import React from 'react'
import Hero from '../Components/Hero/Hero'
import Popular from '../Components/Popular/Popular'
import Offers from '../Components/Offers/Offers'
//This is our Home page

function Shop() {
  return (
    <div>
      <Hero/>
      <Popular/>
      <Offers/>
    </div>
  )
}

export default Shop