import React, { useState, useEffect } from 'react';
import holbox25 from '../../../img/holbox25.jpg';
import holbox5 from '../../../img/holbox5.jpg';
import holbox9 from '../../../img/holbox9.jpg';
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { FaCircle } from "react-icons/fa";
import { FaAngleDoubleRight } from "react-icons/fa";

import { Link } from 'react-router-dom';
import { Row, Col, Button } from 'react-bootstrap';

import './ProCatalogo.css';

export function ProCatalogo1() {
  const images = [holbox5, holbox25, holbox9]; 
  const [currentIndex, setCurrentIndex] = useState(0); // Estado para la imagen actual

  // Datos de la habitación
  const habitacion = "Habitación Doble";
  const precio = 4500;
  const origen = '/ProCatalogo1';

  const serviciosIncluidos = [
    "Baño privado con ducha y bañera",
    "Wi-Fi gratuito",
    "Limpieza diaria",
    "Servicio de habitaciones (room service)",
    "Caja fuerte",
    "Minibar o refrigerador pequeño",
    "Cafetera o tetera"
  ];

  // Cambiar automáticamente las imágenes
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }, 950);

    return () => clearInterval(interval); // Limpia el intervalo al desmontar el componente
  }, [images.length]);

  return (
    <div className="ProCatalogo-container">
      {/* Imagen actual */}
      <div className="slide">
        <img className="img-fullscreen" src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
        <h3 className="Title-habitacion1">Habitación Doble</h3>
        <table className="Text-habitacion1">
          <tbody>
            <tr>
              <td> <FaCircle className="icon-example" /> Dos camas individuales</td>
            </tr>
            <tr>
              <td> <FaCircle className="icon-example" /> Ropa de cama y almohadas</td>
            </tr>
            <tr>
              <td> <FaCircle className="icon-example" /> Mesitas de noche con lámparas</td>
            </tr>
            <tr>
              <td> <FaCircle className="icon-example" /> Armario o closet</td>
            </tr>
            <tr>
              <td> <FaCircle className="icon-example" /> Escritorio y silla</td>
            </tr>
            <tr>
              <td> <FaCircle className="icon-example" /> Televisión con canales por cable o streaming</td>
            </tr>
            <tr>
              <td> <FaCircle className="icon-example" /> Aire acondicionado y calefacción</td>
            </tr>
          </tbody>
        </table>
      </div>
      <Row className="mb-4">
        <Col>
          <Link to="/Servicios">
            <Button variant="link" className="back1-button2">Servicios...</Button>
          </Link>
        </Col>
      </Row>
      <div>
        <table className="Text-habitacion1">
          <h3 className="Title2-habitacion1">Políticas:</h3>
          <tbody>
            <tr>
              <td> <FaCircle className="icon-example" /> Horarios de llegada y check-in/check-out fija</td>
            </tr>
            <tr>
              <td> <FaCircle className="icon-example" /> Políticas de mascotas, fumadores, etc.</td>
            </tr>
          </tbody>
        </table>
      </div>
      <Row className="mb-4">
        <Col>
          <Link
            to="/MetodoPago"
            state={{ habitacion, precio, serviciosIncluidos, origen }} // Enviar todos los datos necesarios
          >
            <Button variant="primary" className="back1-button3" type="submit">Reservar<FaAngleDoubleRight /></Button>
          </Link>
        </Col>
      </Row>
      <Row className="mb-4">
        <Col>
          <Link to="/catalogo">
            <Button variant="link" className="back1-button1"><MdOutlineArrowBackIosNew />Volver</Button>
          </Link>
        </Col>
      </Row>
    </div>
  );
}