import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

export function Registro() {
    const [formData, setFormData] = useState({
        nombre: '',
        apellido: '',
        telefono: '',
        email: '',
        contraseña: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Datos Registrados:", formData); // Solo para pruebas
        localStorage.setItem('usuario', JSON.stringify(formData)); // Guardar en localStorage
        alert("Registro exitoso!");
    };

    return (
        <div className="login-container">
            <div className="login-text">
                <h2>CREA TU CUENTA</h2>
            </div>
            <div className="login-form">
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formNombre">
                        <Form.Label><strong>Nombre</strong></Form.Label>
                        <Form.Control type="text" name="nombre" placeholder="Ingresa tu Nombre" value={formData.nombre} onChange={handleChange} required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formApellido">
                        <Form.Label><strong>Apellido</strong></Form.Label>
                        <Form.Control type="text" name="apellido" placeholder="Ingresa tu Apellido" value={formData.apellido} onChange={handleChange} required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formTelefono">
                        <Form.Label><strong>Teléfono</strong></Form.Label>
                        <Form.Control type="text" name="telefono" placeholder="Ingresa tu Teléfono" value={formData.telefono} onChange={handleChange} required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formEmail">
                        <Form.Label><strong>Email</strong></Form.Label>
                        <Form.Control type="email" name="email" placeholder="Ingresa tu Email" value={formData.email} onChange={handleChange} required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formContraseña">
                        <Form.Label><strong>Contraseña</strong></Form.Label>
                        <Form.Control type="password" name="contraseña" placeholder="Ingresa tu Contraseña" value={formData.contraseña} onChange={handleChange} required />
                    </Form.Group>
                    <div className="d-flex justify-content-between">
                        <Link to="/iniciosesion">
                            <Button variant="secondary">Iniciar Sesión</Button>
                        </Link>
                    </div>
                </Form>
            </div>
        </div>
    );
}