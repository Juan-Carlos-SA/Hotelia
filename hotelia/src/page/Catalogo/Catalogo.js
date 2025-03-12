import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import holbox from '../../img/holbox.jpeg';
import './Catalogo.css'; 

export function Catalogo() {
  return (
    <div className="catalogo-container">
      <Card className="catalogo-card">
        <Card.Img variant="top" src={holbox} />
        <Card.Body>
          <Card.Title>Habitación doble</Card.Title>
          <Card.Text>
            $4,500
          </Card.Text>
          <Button variant="secondary">Reservar ahora</Button>
        </Card.Body>
      </Card>
    </div>
  )
}
