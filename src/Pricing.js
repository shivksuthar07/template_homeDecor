import React from 'react'
import Cards from './Cards'
import Sdata from './Sdata'
const Pricing = () => {
  return (
    <div className='pricingpage'>
      <div className='container price '>
      
     
     {Sdata.map((val,ind)=>{
        return(
           <Cards
           imgsrc={val.imgsrc}
           title={val.title}
           text={val.text}
           />
        )
     })}


       
      
      </div>
      </div>
     
  )
}

export default Pricing
