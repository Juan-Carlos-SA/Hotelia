import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import holbox19 from '../../../img/holbox19.jpg';
import holbox22 from '../../../img/holbox22.jpg';
import holbox18 from '../../../img/holbox18.jpg';

export function ProCatalogo3() {
  return (
    <div>
      <div>
      <Carousel>
  <Carousel.Item  >
    <img className="img1 img1-4" src={holbox22} alt="holbox22" text="First slide" />
    <Carousel.Caption>
      <h3 className='text-habitacion1'> Cabaña </h3>
      <p className='text-habitacion1'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item  >
    <img className="img1" src={holbox18} alt="holbox18" text="First slide" />
    <Carousel.Caption>
      <h3 className='text-habitacion1'> Cabaña </h3>
      <p className='text-habitacion1'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img className="img1 img1" src={holbox19} alt="holbox19" text="Second slide" />
    <Carousel.Caption > 
      <h3 className='text-habitacion1-2'>Second slide label</h3>
      <p className='text-habitacion1-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>     
      </div>
    </div>
  )
}
