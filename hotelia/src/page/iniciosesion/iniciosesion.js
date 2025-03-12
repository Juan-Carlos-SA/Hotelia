import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import './Iniciosesion.css'

export function Iniciosesion() {
    return (
        <div className="login-container">
            <div className="login-text">
                <h2 className='Title2' >INICIA SESIÓN</h2>
            </div>
            <div className="login-form">
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label><strong>Email</strong></Form.Label>
                        <Form.Control type="email" placeholder="Ingresa tu email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label><strong>Contraseña</strong></Form.Label>
                        <Form.Control type="password" placeholder="Ingresa tu contraseña" />
                    </Form.Group>
                    <div className="d-flex justify-content-between">
                        <Link to="/catalogo">
                            <Button variant="primary" type="submit">Acceder</Button>
                        </Link>
                        <Link to="/Registro">
                            <Button variant="secondary">Registrarse</Button>
                        </Link>
                    </div>
                </Form>
            </div>
        </div>
    )
}
