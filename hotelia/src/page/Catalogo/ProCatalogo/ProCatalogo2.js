import React, { useState, useEffect } from 'react';
import holbox26 from '../../../img/holbox26.jpg';
import holbox27 from '../../../img/holbox27.jpg';
import holbox29 from '../../../img/holbox29.jpg';
import holbox28 from '../../../img/holbox28.jpg';
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { FaCircle } from "react-icons/fa";
import { FaAngleDoubleRight } from "react-icons/fa";

import { Link } from 'react-router-dom';
import { Row, Col, Button } from 'react-bootstrap';

export function ProCatalogo2() {
  const images = [holbox28, holbox26, holbox29, holbox27]; // Lista de imágenes
  const [currentIndex, setCurrentIndex] = useState(0); // Estado para la imagen actual

  // Datos de la habitación
    const habitacion = "Cabaña";
    const precio = 18000;
    const origen = '/ProCatalogo2';
  
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
          <h3 className="Title-habitacion1">Cabaña</h3>
          <table className="Text-habitacion1">
            <tbody>
            <tr>
              <td> <FaCircle className="icon-example" /> Cama King o Queen size (camas adicionales o literas)</td>
            </tr>
            <tr>
              <td> <FaCircle className="icon-example" /> Decoración: Estilo rústico, con detalles en madera y chimenea</td>
            </tr>
            <tr>
              <td> <FaCircle className="icon-example" /> Espacio: Entre 30 y 80 m²</td>
            </tr>
            <tr>
              <td> <FaCircle className="icon-example" /> Capacidad: 2 a 6 personas</td>
            </tr>
            <tr>
              <td> <FaCircle className="icon-example" /> Sala de estar con sofá y TV</td>
            </tr>
            <tr>
              <td> <FaCircle className="icon-example" /> Ubicación: En zonas naturales o playas</td>
            </tr>
            <tr>
              <td> <FaCircle className="icon-example" /> Terraza privada con hamacas o sillas</td>
            </tr>
            <tr>
              <td> <FaCircle className="icon-example" /> Televisión con canales por cable o streaming</td>
               </tr>
            <tr>
              <td> <FaCircle className="icon-example" /> Aire acondicionado y calefacción</td>
            </tr>
            <tr>
              <td> <FaCircle className="icon-example" /> Jacuzzi o tina de hidromasaje</td>
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