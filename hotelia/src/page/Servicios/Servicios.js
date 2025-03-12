import React from "react";
import holbox4 from '../../img/holbox4.jpg'

import './Servicios.css'

export function Servicios() {
  return (
  <div>
  
    <img className="img1" src={holbox4} alt="Holbox" width="860px" />
    <div>
      <h1 className="Title1"> Servicios </h1>
      <h2 className="text1">Incluido en tu reserva</h2>
      <p className="text2"> Descubre los servicios que Hotelia ofrece a sus huespedes sin costo adicional, 
        como WI-FI, desayuno, bufet, limpieza diaria, piscina, gimnacio y caja fuerte. </p>
        <h2 className="text1">Costos Extras</h2>
        <p className="text2"> Para una experiencia aun mas exclusiva, Hotelia brinda servicios adicionales como minibar, 
            spa, restaurantes gourmet, salones de eventos, transporte al aereopuerto y actividades recreativas 
            con un costo adicional.</p>
      <div className="d-flex justify-content-between">
      
      </div>
      
    </div>
    
    
  </div>
)};