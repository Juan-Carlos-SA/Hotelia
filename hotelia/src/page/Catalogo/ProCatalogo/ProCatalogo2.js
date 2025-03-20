import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import holbox26 from '../../../img/holbox26.jpg';
import holbox27 from '../../../img/holbox27.jpg';
import holbox29 from '../../../img/holbox29.jpg';
import holbox28 from '../../../img/holbox28.jpg';

import { Link } from 'react-router-dom';
import { Row, Col, Button} from 'react-bootstrap';


export  function ProCatalogo2() {
  return (
    <div> 
    <Carousel>
  <Carousel.Item  >
    <img className="img1 img1-4" src={holbox26} alt="holbox26" text="First slide" />
    <Carousel.Caption>
      <h3 className='text-habitacion1'> Cabaña </h3>
      <p className='text-habitacion1'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item  >
    <img className="img1" src={holbox28} alt="holbox28" text="First slide" />
    <Carousel.Caption>
      <h3 className='text-habitacion1'> Cabaña </h3>
      <p className='text-habitacion1'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img className="img1 img1" src={holbox27} alt="holbox27" text="Second slide" />
    <Carousel.Caption > 
      <h3 className='text-habitacion1-2'>Second slide label</h3>
      <p className='text-habitacion1-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img className="img1" src={holbox29} alt="holbox29" text="Third slide" />
    <Carousel.Caption>
      <h3 className='text-habitacion1-3'>Third slide label</h3>
      <p className='text-habitacion1-3'>
        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
      </p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

<Row className="mb-4">
                <Col>
                    <Link to="/catalogo">
                        <Button variant="link" className="back1-button1">Volver</Button>
                    </Link>
                </Col>
            </Row>
</div>
  )
}
