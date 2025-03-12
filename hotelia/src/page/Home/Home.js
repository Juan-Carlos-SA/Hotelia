import React from "react";
import holbox from '../../img/holbox.jpeg';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import './Home.css'

export function Home() {
  return (
  <div>
  
    <img className="img" src={holbox} alt="Holbox" width="840" />
    <div>
      <h1 className="Title"> ¡Bienvenidos a Hotelia! </h1>
      
      <h3 className="text"> Experimenta la hospitalidad excepcional </h3>
      <div className="d-flex justify-content-between">
      
      <Link to="/iniciosesion">
              <Button variant="secondary" className="button">¡Iniciar!</Button>
      </Link>
      </div>
      
    </div>
    
    
  </div>
)};