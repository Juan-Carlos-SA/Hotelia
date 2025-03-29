import React from "react";
import holbox4 from '../../img/holbox4.jpg'
import holbox3 from '../../img/holbox3.jpg'
import holbox2 from '../../img/holbox2.jpg'
import { Link } from 'react-router-dom';
import { Row, Col, Button} from 'react-bootstrap';
import { MdOutlineArrowBackIosNew} from "react-icons/md";

import './Servicios.css'

export function Servicios() {
  return (
    <div className="servicios-container">
  
    <img src={holbox4} alt="Holbox" width="831px" />
    <Link to="/ProServicios"><img className="img2 " src={holbox3} alt="Holbox" width="100px" /></Link>
    <Link to="/ProServicios1"><img className="img2 img3" src={holbox2} alt="Holbox" width="100px" /></Link>
    <div>
      <h1 className="Title1"> Servicios </h1>
      <h2 className="text1">Incluido en tu reserva</h2>
      <p className="text2"> Descubre los servicios que Hotelia ofrece a sus huespedes sin costo adicional, 
        como WI-FI, desayuno, bufet, limpieza diaria, piscina, gimnacio y caja fuerte. </p>
        <h2 className="text1">Costos Extras</h2>
        <p className="text2"> Para una experiencia aun mas exclusiva, Hotelia brinda servicios adicionales como minibar, 
            spa, restaurantes gourmet, salones de eventos, transporte al aereopuerto y actividades recreativas 
            con un costo adicional.</p>
      <Row className="mb-4">
                <Col>
                    <Link to="/catalogo">
                        <Button variant="link" className="back1-button"> <MdOutlineArrowBackIosNew /> Volver</Button>
                    </Link>
                </Col>
            </Row>
      
    </div>
    
    
  </div>
)};