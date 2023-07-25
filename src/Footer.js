import React from 'react'

const Footer = () => {
    const time=new Date().getFullYear();
  return (
    <div className='footer'>
      <h6>©Copy Right {time}</h6>
    </div>
  )
}

export default Footer
