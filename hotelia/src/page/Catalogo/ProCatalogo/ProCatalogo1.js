import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import holbox25 from '../../../img/holbox25.jpg';
import holbox5 from '../../../img/holbox5.jpg';
import holbox9 from '../../../img/holbox9.jpg';

import './ProCatalogo.css'

export function ProCatalogo1() {
  return (
    <div> 
      <Carousel>
    <Carousel.Item  >
      <img className="img1" src={holbox5} alt="holbox5" text="First slide" />
      <Carousel.Caption>
        <h3 className='text-habitacion1'> Habitacion Doble</h3>
        <p className='text-habitacion1'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img className="img1 -img1" src={holbox25} alt="holbox25" text="Second slide" />
      <Carousel.Caption > 
        <h3 className='text-habitacion1-2'>Second slide label</h3>
        <p className='text-habitacion1-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img className="img1 img1-1" src={holbox9} alt="Holbox9" text="Third slide" />
      <Carousel.Caption>
        <h3 className='text-habitacion1-3'>Third slide label</h3>
        <p className='text-habitacion1-3'>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  </div>
  )
}

export default ProCatalogo1