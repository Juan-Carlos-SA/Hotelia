import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { MdOutlineDriveFileRenameOutline as Icon } from "react-icons/md";
import { useNavigate } from 'react-router-dom'; // Importar useNavigate

export function Registro() {
    const [formData, setFormData] = useState({ nombre: '', apellido: '', telefono: '', email: '', contraseña: '' });
    const navigate = useNavigate(); // Inicializar el hook useNavigate

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (Object.values(formData).some(field => !field)) {
            alert("Por favor, completa todos los campos.");
            return;
        }
        localStorage.setItem('usuario', JSON.stringify(formData));
        alert("Registro exitoso!");
        navigate('/iniciosesion'); // Redirigir al apartado de inicio de sesión
    };

    const renderInput = (label, name, type = "text", placeholder) => (
        <Form.Group className="mb-3">
            <Form.Label><Icon /><strong> {label}</strong></Form.Label>
            <Form.Control 
                type={type} 
                name={name} 
                placeholder={placeholder} 
                value={formData[name]} 
                onChange={handleChange} 
                autoComplete="off" // Deshabilitar autocompletado
                required 
            />
        </Form.Group>
    );

    return (
        <div className="login-container">
            <div className="login-text"><h2>CREA TU CUENTA</h2></div>
            <div className="login-form">
                <Form onSubmit={handleSubmit}>
                    {renderInput("Nombre", "nombre", "text", "Ingresa tu Nombre")}
                    {renderInput("Apellidos", "apellido", "text", "Ingresa tus Apellidos")}
                    {renderInput("Teléfono", "telefono", "text", "Ingresa tu Teléfono")}
                    {renderInput("Email", "email", "email", "Ingresa tu Email")}
                    {renderInput("Contraseña", "contraseña", "password", "Ingresa tu Contraseña")}
                    <div className="d-flex justify-content-between">
                        <Button variant="secondary" type="submit">Guardar</Button>
                    </div>
                </Form>
            </div>
        </div>
    );
}