import React from 'react'
import Card from 'react-bootstrap/Card';
import cuarto1 from '../../img/cuarto1.png';
import cuarto2 from '../../img/cuarto2.png';
import cuarto3 from '../../img/cuarto3.png';
import { Link } from 'react-router-dom';
import {Button} from 'react-bootstrap';
import './Catalogo.css';


export function Catalogo() {
  return (
    <div className="catalogo-container">
      <Card className="catalogo-card">
        <Card.Img variant="top" src={cuarto1} className="catalogo-card-img" />
        <Card.Body>
          <Card.Title>Habitación doble</Card.Title>
          <Card.Text>
            $4,500
          </Card.Text>
          <Link to="/ProCatalogo1">
            <Button variant="secondary"> ¡Ver más! </Button>
          </Link>
        </Card.Body>
      </Card>
      <Card className="catalogo-card">
        <Card.Img variant="top" src={cuarto2} className="catalogo-card-img" />
        <Card.Body>
          <Card.Title>Cabaña</Card.Title>
          <Card.Text>
            $18,000
          </Card.Text>
          <Link to="/ProCatalogo2">
            <Button variant="secondary"> ¡Ver más! </Button>
          </Link>
        </Card.Body>
      </Card>
      <Card className="catalogo-card">
        <Card.Img variant="top" src={cuarto3} className="catalogo-card-img" />
        <Card.Body>
          <Card.Title>Suite elegante</Card.Title>
          <Card.Text>
            $8,000
          </Card.Text>
          <Link to="/ProCatalogo3">
            <Button variant="secondary"> ¡Ver más! </Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
    
  )
}
