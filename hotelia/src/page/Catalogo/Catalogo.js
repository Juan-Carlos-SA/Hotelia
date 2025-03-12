import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import cuarto1 from '../../img/cuarto1.png';
import cuarto2 from '../../img/cuarto2.png';
import cuarto3 from '../../img/cuarto3.png';
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
          <Button variant="secondary">Reservar ahora</Button>
        </Card.Body>
      </Card>
      <Card className="catalogo-card">
        <Card.Img variant="top" src={cuarto2} className="catalogo-card-img" />
        <Card.Body>
          <Card.Title>Cabaña</Card.Title>
          <Card.Text>
            $3,000
          </Card.Text>
          <Button variant="secondary">Reservar ahora</Button>
        </Card.Body>
      </Card>
      <Card className="catalogo-card">
        <Card.Img variant="top" src={cuarto3} className="catalogo-card-img" />
        <Card.Body>
          <Card.Title>Suite elegante</Card.Title>
          <Card.Text>
            $6,000
          </Card.Text>
          <Button variant="secondary">Reservar ahora</Button>
        </Card.Body>
      </Card>
    </div>
  )
}
