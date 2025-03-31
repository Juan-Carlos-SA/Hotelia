import React from 'react'
import Card from 'react-bootstrap/Card';
import cuarto1 from '../../img/cuarto1.png';
import cuarto2 from '../../img/cuarto2.png';
import cuarto3 from '../../img/cuarto3.png';
import { Link } from 'react-router-dom';
import './Catalogo.css';


export function Catalogo() {
  return (
    <div className="catalogo-container" >
      
      <Card className="catalogo-card" >
        <Link to="/ProCatalogo1" className="catalogo-card-link">
        <Card.Img variant="top" src={cuarto1} className="catalogo-card-img" />
        <Card.Body>
        <Card.Title></Card.Title>
          <Card.Title><strong> Habitación doble</strong></Card.Title>
          <Card.Text className='catalogo-card-text'>
            $4,500
          </Card.Text>
          <Card.Title></Card.Title>
          <Card.Title></Card.Title>
        </Card.Body> 
        </Link>
      </Card>
     
      <Card className="catalogo-card" >
      <Link to="/ProCatalogo2" className="catalogo-card-link">
        <Card.Img variant="top" src={cuarto2} className="catalogo-card-img" />
        <Card.Body>
        <Card.Title></Card.Title>
          <Card.Title><strong>Cabaña</strong></Card.Title>
          <Card.Text className='catalogo-card-text'>
            $18,000
          </Card.Text>
          <Card.Title></Card.Title>
          <Card.Title></Card.Title>
        </Card.Body>
        </Link>
      </Card>
      <Card className="catalogo-card">
      <Link to="/ProCatalogo3" className="catalogo-card-link">
        <Card.Img variant="top" src={cuarto3} className="catalogo-card-img" />
        <Card.Body>
        <Card.Title></Card.Title>
          <Card.Title><strong>Suite Elegante</strong></Card.Title>
          <Card.Text className='catalogo-card-text'>
            $8,000
          </Card.Text>
          <Card.Title></Card.Title>
          <Card.Title></Card.Title>
        </Card.Body>
        </Link>
      </Card>
    </div>
    
  )
}
