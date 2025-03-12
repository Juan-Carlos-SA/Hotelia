import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import './Registro.css';

export function registro() {
    return (
        <div className="login-container">
            <div className="login-text">
                <h2>CREA TU CUENTA</h2>
            </div>
            <div className="login-form">
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control type="email" placeholder="Ingresa tu Nombre" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Apellido</Form.Label>
                        <Form.Control type="password" placeholder="Ingresa tu Apellido" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Telefono</Form.Label>
                        <Form.Control type="password" placeholder="Ingresa tu Telefono" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Ingresa tu email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control type="password" placeholder="Ingresa tu contraseña" />
                    </Form.Group>
                    <div className="d-flex justify-content-between">
                        <Link to="/iniciodesion">
                            <Button variant="secondary">Iniciar Sesion</Button>
                        </Link>
                    </div>
                </Form>
            </div>
        </div>
    )
}
