import React, { useState, useEffect } from 'react';
import holbox19 from '../../../img/holbox19.jpg';
import holbox22 from '../../../img/holbox22.jpg';
import holbox18 from '../../../img/holbox18.jpg';
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { FaCircle } from "react-icons/fa";
import { FaAngleDoubleRight } from "react-icons/fa";

import { Link } from 'react-router-dom';
import { Row, Col, Button } from 'react-bootstrap';

export function ProCatalogo3() {
  const images = [holbox18, holbox22, holbox19]; // Lista de imágenes
  const [currentIndex, setCurrentIndex] = useState(0); // Estado para la imagen actual

  // Datos de la habitación
  const habitacion = "Suite Elegante";
  const precio = 8000;
    const origen = '/ProCatalogo3';
  
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
          <h3 className="Title-habitacion1">Suite Elegante</h3>
          <table className="Text-habitacion1">
            <tbody>
            <tr>
              <td> <FaCircle className="icon-example" /> Sala de estar independiente con sofás y zona de entretenimiento.</td>
            </tr>
            <tr>
              <td> <FaCircle className="icon-example" /> Terraza privada con vistas panorámicas (en suites especiales).</td>
            </tr>
            <tr>
              <td> <FaCircle className="icon-example" /> Smart TV con servicios de streaming y sonido envolvente</td>
            </tr>
            <tr>
              <td> <FaCircle className="icon-example" /> Minibar premium con bebidas y aperitivos gourmet.</td>
            </tr>
            <tr>
              <td> <FaCircle className="icon-example" /> Cama King size con sábanas de algodón egipcio</td>
            </tr>
            <tr>
              <td> <FaCircle className="icon-example" /> Transporte de lujo desde y hacia el aeropuerto.</td>
            </tr>
            <tr>
              <td> <FaCircle className="icon-example" /> Servicio de mayordomo o concierge 24/7</td>
            </tr>
             <tr>
              <td> <FaCircle className="icon-example" /> Desayuno de cortesía en la habitación</td>
            </tr>
            <tr>
              <td> <FaCircle className="icon-example" /> Acceso al spa, piscina y gimnasio VIP</td>
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