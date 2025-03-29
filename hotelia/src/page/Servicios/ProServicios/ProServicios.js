import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import holbox30 from '../../../img/holbox30.jpg';
import holbox34 from '../../../img/holbox34.jpg';
import holbox32 from '../../../img/holbox32.jpg';
import holbox35 from '../../../img/holbox35.jpg';
import holbox33 from '../../../img/holbox33.jpg';
import { TiInputChecked } from "react-icons/ti";

import { MdOutlineArrowBackIosNew } from "react-icons/md";

import { Link } from 'react-router-dom';
import { Row, Col, Button} from 'react-bootstrap';


import './ProServicios.css';

export  function ProServicios() {
  return (
      <div className="carousel-container">
    <Carousel interval={2000} pause="hover">
        <Carousel.Item className="bg-dark text-white">
          <img className="d-block img-fullscreen1" src={holbox30} alt="holbox30" />
          <Carousel.Caption>
          <h1 className='Title-Ser'>Servicios incluidos :</h1>
  <table className="table-services">
    <tbody>
      <tr>
        <td> <TiInputChecked />   Baño privado con ducha y bañera</td>
      </tr>
      <tr>
        <td> <TiInputChecked />   Artículos de aseo (jabón, shampoo, toallas, secador de pelo)</td>
      </tr>
      <tr>
        <td> <TiInputChecked />   Wi-Fi gratuito</td>
      </tr>
      <tr>
        <td> <TiInputChecked />   Limpieza diaria</td>
      </tr>
      <tr>
        <td> <TiInputChecked />   Servicio de habitaciones (room service)</td>
      </tr>
      <tr>
        <td> <TiInputChecked />   Caja fuerte</td>
      </tr>
      <tr>
        <td> <TiInputChecked />   Minibar o refrigerador pequeño</td>
      </tr>
      <tr>
        <td> <TiInputChecked />   Cafetera o tetera</td>
      </tr>
    </tbody>
  </table>
          </Carousel.Caption>
        </Carousel.Item >

        <Carousel.Item className="bg-dark text-white">
          <img className="d-block img-fullscreen1" src={holbox34} alt="holbox34" />
          <Carousel.Caption>
         <h1 className='Title-Ser'>Servicios incluidos :</h1>
         <table className="table-services">
    <tbody>
      <tr>
      <td> <TiInputChecked />   Baño privado con ducha y bañera</td>
      </tr>
      <tr>
        <td> <TiInputChecked />   Artículos de aseo (jabón, shampoo, toallas, secador de pelo)</td>
      </tr>
      <tr>
        <td> <TiInputChecked />   Wi-Fi gratuito</td>
      </tr>
      <tr>
        <td> <TiInputChecked />   Limpieza diaria</td>
      </tr>
      <tr>
        <td> <TiInputChecked />   Servicio de habitaciones (room service)</td>
      </tr>
      <tr>
        <td> <TiInputChecked />   Caja fuerte</td>
      </tr>
      <tr>
        <td> <TiInputChecked />   Minibar o refrigerador pequeño</td>
      </tr>
      <tr>
        <td> <TiInputChecked />   Cafetera o tetera</td>
      </tr>
    </tbody>
  </table>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="bg-dark text-white">
          <img className="d-block img-fullscreen1" src={holbox32} alt="holbox32" />
          <Carousel.Caption>
          <h1 className='Title-Ser'>Servicios incluidos :</h1>
          <table className="table-services">
    <tbody>
      <tr>
      <td> <TiInputChecked />   Baño privado con ducha y bañera</td>
      </tr>
      <tr>
        <td> <TiInputChecked />   Artículos de aseo (jabón, shampoo, toallas, secador de pelo)</td>
      </tr>
      <tr>
        <td> <TiInputChecked />   Wi-Fi gratuito</td>
      </tr>
      <tr>
        <td> <TiInputChecked />   Limpieza diaria</td>
      </tr>
      <tr>
        <td> <TiInputChecked />   Servicio de habitaciones (room service)</td>
      </tr>
      <tr>
        <td> <TiInputChecked />   Caja fuerte</td>
      </tr>
      <tr>
        <td> <TiInputChecked />   Minibar o refrigerador pequeño</td>
      </tr>
      <tr>
        <td> <TiInputChecked />   Cafetera o tetera</td>
      </tr>
    </tbody>
  </table>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="bg-dark text-white">
          <img className="d-block img-fullscreen1" src={holbox35} alt="holbox35" />
          <Carousel.Caption>
          <h1 className='Title-Ser'>Servicios incluidos :</h1>
          <table className="table-services">
    <tbody>
      <tr>
      <td> <TiInputChecked />   Baño privado con ducha y bañera</td>
      </tr>
      <tr>
        <td> <TiInputChecked />   Artículos de aseo (jabón, shampoo, toallas, secador de pelo)</td>
      </tr>
      <tr>
        <td> <TiInputChecked />   Wi-Fi gratuito</td>
      </tr>
      <tr>
        <td> <TiInputChecked />   Limpieza diaria</td>
      </tr>
      <tr>
        <td> <TiInputChecked />   Servicio de habitaciones (room service)</td>
      </tr>
      <tr>
        <td> <TiInputChecked />   Caja fuerte</td>
      </tr>
      <tr>
        <td> <TiInputChecked />   Minibar o refrigerador pequeño</td>
      </tr>
      <tr>
        <td> <TiInputChecked />   Cafetera o tetera</td>
      </tr>
    </tbody>
  </table>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="bg-dark text-white">
          <img className="d-block img-fullscreen1" src={holbox33} alt="holbox33" />
          <Carousel.Caption>
          <h1 className='Title-Ser'>Servicios incluidos :</h1>
          <table className="table-services">
    <tbody>
      <tr>
      <td> <TiInputChecked />   Baño privado con ducha y bañera</td>
      </tr>
      <tr>
        <td> <TiInputChecked />   Artículos de aseo (jabón, shampoo, toallas, secador de pelo)</td>
      </tr>
      <tr>
        <td> <TiInputChecked />   Wi-Fi gratuito</td>
      </tr>
      <tr>
        <td> <TiInputChecked />   Limpieza diaria</td>
      </tr>
      <tr>
        <td> <TiInputChecked />   Servicio de habitaciones (room service)</td>
      </tr>
      <tr>
        <td> <TiInputChecked />   Caja fuerte</td>
      </tr>
      <tr>
        <td> <TiInputChecked />   Minibar o refrigerador pequeño</td>
      </tr>
      <tr>
        <td> <TiInputChecked />   Cafetera o tetera</td>
      </tr>
    </tbody>
  </table> 
  <Row className="mb-4">
                <Col>
                    <Link  to="/ProCatalogo1" >
                        <Button variant="link" className="back1-button">Volver</Button>
                    </Link>
                </Col>
            </Row>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    
    </div>
  )
}
