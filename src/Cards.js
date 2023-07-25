import React from 'react'
import{Link} from "react-router-dom";
const Cards = (props) => {
  return (
    <div className='py-4 card_data '>
    <div className="card"  >
    <img src={props.imgsrc} className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">{props.title}</h5>
      <p className="card-text">{props.text}</p>
      <Link to='/images' className="btn btn-primary link_button ">More Details</Link>
    </div>
  </div>
    </div>
  )
}

export default Cards
