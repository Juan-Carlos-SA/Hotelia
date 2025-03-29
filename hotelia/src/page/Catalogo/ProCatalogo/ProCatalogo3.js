import React, { useState, useEffect } from 'react';
import holbox19 from '../../../img/holbox19.jpg';
import holbox22 from '../../../img/holbox22.jpg';
import holbox18 from '../../../img/holbox18.jpg';
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { FaCircle } from "react-icons/fa";

import { Link } from 'react-router-dom';
import { Row, Col, Button} from 'react-bootstrap';

export function ProCatalogo3() {
  const images = [holbox18, holbox22, holbox19]; // Lista de imágenes
    const [currentIndex, setCurrentIndex] = useState(0); // Estado para la imagen actual
  
    // Cambiar automáticamente las imágenes cada 3 segundos
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
      }, 950); // Cambia cada 3 segundos
  
      return () => clearInterval(interval); // Limpia el intervalo al desmontar el componente
    }, [images.length]);

    return (
      <div className="ProCatalogo-container" >
  
        {/* Imagen actual */}
        <div className="slide">
          <img className="img-fullscreen" src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
          <h3 className="Title-habitacion1">Suite Elegante</h3>
         <table className="Text-habitacion1">
             <tbody>
               <tr>
               <td> <FaCircle className="icon-example"  />     Dos camas individuales</td>
               </tr>
               <tr>
                 <td> <FaCircle className="icon-example"   />   Ropa de cama y almohadas</td>
               </tr>
               <tr>
                 <td> <FaCircle className="icon-example"  />   Mesitas de noche con lámparas</td>
               </tr>
               <tr>
                 <td> <FaCircle className="icon-example"  />   Armario o closet</td>
               </tr>
               <tr>
                 <td> <FaCircle className="icon-example"  />   Escritorio y silla</td>
               </tr>
               <tr>
                 <td> <FaCircle className="icon-example"  />   Televisión con canales por cable o streaming</td>
               </tr>
               <tr>
                 <td> <FaCircle className="icon-example"  />   Aire acondicionado y calefacción</td>
               </tr>
               <tr>
                 <td> <FaCircle className="icon-example"  />   Ventana con vista</td>
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