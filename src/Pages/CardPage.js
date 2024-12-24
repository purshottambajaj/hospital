import React from 'react'
import Header from '../Components/Header'
import FilterCard from '../Components/FilterCard'
import doctorsData from '../doctorsData.json'
import { Router } from 'react-router-dom'

const CardPage = () => {
  return (
    <div>
        <Header/>
        <FilterCard doctors={doctorsData} />
    </div>
  )
}

export default CardPage