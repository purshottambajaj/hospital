import React from 'react'
import Header from '../Components/Header'
import Detail from '../Components/Detail'
import doctorData from '../doctorsData.json'

const DetailPage = () => {
  return (
    <div>
        <Header/>
        <Detail doctors={doctorData}/>
  
    </div>
  )
}

export default DetailPage