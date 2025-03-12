import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

export function Registro() {
    return (
        <div className="login-container">
            <div className="login-text">
                <h2>CREA TU CUENTA</h2>
            </div>
            <div className="login-form">
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label><strong>Nombre</strong></Form.Label>
                        <Form.Control type="email" placeholder="Ingresa tu Nombre" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label><strong>Apellido</strong></Form.Label>
                        <Form.Control type="password" placeholder="Ingresa tu Apellido" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label><strong>Telefono</strong></Form.Label>
                        <Form.Control type="password" placeholder="Ingresa tu Telefono" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label><strong>Email</strong></Form.Label>
                        <Form.Control type="email" placeholder="Ingresa tu email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label><strong>Contraseña</strong></Form.Label>
                        <Form.Control type="password" placeholder="Ingresa tu contraseña" />
                    </Form.Group>
                    <div className="d-flex justify-content-between">
                        <Link to="/iniciosesion">
                            <Button variant="secondary">Guardar</Button>
                        </Link>
                    </div>
                </Form>
            </div>
        </div>
    )
}
