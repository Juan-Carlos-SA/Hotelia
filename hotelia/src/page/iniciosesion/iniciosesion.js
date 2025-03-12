import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom'; 

export function iniciosesion() {
    return (
        <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Email </Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control as="textarea" rows={1} />
            </Form.Group>
            <Link to="/dashboard">
                <Button variant="primary" type="submit">Acceder</Button> {/* Botón Acceder */}
            </Link>
            <Link to="/register">
                <Button variant="secondary" className="ms-2">Registrarse</Button> {/* Botón Registrarse */}
            </Link>
        </Form>
    )
}
