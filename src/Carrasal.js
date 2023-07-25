import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import img1 from "./cur1.jpg"
import img2 from "./cur2.jpg"
import img3 from "./cur3.jpg"
import img4 from "./cur4.jpg"
import img5 from "./cur5.jpg"
import img6 from "./cur6.jpg"
const Carrasal = () => {
  return (
    <div className='carsal'>
    <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={img1} className="d-block w-100 "  alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={img2} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={img3} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={img4} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={img5} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={img6} className="d-block w-100"  alt="..."/>
    </div>
  </div>
</div>
    </div>
  )
}

export default Carrasal
