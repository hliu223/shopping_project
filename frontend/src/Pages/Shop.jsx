import React from 'react'
import Hero from '../Components/Hero/Hero'
import Popular from '../Components/Popular/Popular'
import {offers as Offers} from '../Components/offers/offers'
import { NewCollections}  from '../Components/newCollections/newCollections'
import {NewsLetter}  from '../Components/NewsLetter/NewsLetter'


export const Shop = () => {
  return (
    <div>
      <Hero/>
      <Popular/>
      <Offers/>
      <NewCollections/>
      <NewsLetter/>
    </div>
  )
}
