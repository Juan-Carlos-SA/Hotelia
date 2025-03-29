import React, { useState, useEffect } from 'react';
import holbox26 from '../../../img/holbox26.jpg';
import holbox27 from '../../../img/holbox27.jpg';
import holbox29 from '../../../img/holbox29.jpg';
import holbox28 from '../../../img/holbox28.jpg';
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { FaCircle } from "react-icons/fa";

import { Link } from 'react-router-dom';
import { Row, Col, Button} from 'react-bootstrap';


export  function ProCatalogo2() {
 const images = [holbox28, holbox26, holbox29, holbox27]; // Lista de imágenes
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
         <h3 className="Title-habitacion1">Cabaña</h3>
        <table className="Text-habitacion1">
            <tbody>
              <tr>
              <td> <FaCircle className="icon-example"   />   Dos camas individuales</td>
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