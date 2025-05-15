import React from "react";
import holbox4 from '../../img/holbox4.jpg'
import holbox2 from '../../img/holbox2.jpg'
import { Link } from 'react-router-dom';
import { Row, Col, Button } from 'react-bootstrap';
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import Card from 'react-bootstrap/Card';

import './Servicios.css'

export function Servicios() {
  return (
    <div className="servicios-container">
      <img src={holbox4} alt="Holbox" width="831px" />
      <h1 className="Title1">Servicios</h1>

      <Card className="Servicio-card">
        <Row className="align-items-center">
          {/* Imagen a la izquierda */}
          <Col md={4} xs={12}>
            <Link to="/ProServicios" className="Servicios-card-link">
              <Card.Img variant="top" src={holbox2} className="img2" />
            </Link>
          </Col>
          {/* Texto a la derecha */}
          <Col md={8} xs={12}>
            <Card.Body>
              <Card.Title className="text1"><strong>Costos Extras</strong></Card.Title>
              <Card.Text className="text2">
                Para una experiencia aun más exclusiva, Hotelia brinda servicios adicionales como minibar,
                spa, restaurantes gourmet, salones de eventos, transporte al aeropuerto y actividades recreativas
                con un costo adicional.
              </Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Card>

      <Row className="mb-4">
        <Col>
          <Link to="/catalogo">
            <Button variant="link" className="back1-button">
              <MdOutlineArrowBackIosNew /> Volver
            </Button>
          </Link>
        </Col>
      </Row>
    </div>
  );
}