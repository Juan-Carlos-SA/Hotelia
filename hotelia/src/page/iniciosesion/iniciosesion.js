import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { TbLockPassword } from "react-icons/tb";
import { HiOutlineMailOpen } from "react-icons/hi";
import './Iniciosesion.css';

export function Iniciosesion() {
    const [email, setEmail] = useState(''), [password, setPassword] = useState(''), [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        const storedUser = JSON.parse(localStorage.getItem("usuario"));
        storedUser && storedUser.email === email && storedUser.contraseña === password
            ? navigate("/catalogo")
            : setError("Correo o contraseña incorrectos");
    };

    const renderInput = (label, type, value, setValue, Icon) => (
        <Form.Group className="mb-3">
            <Form.Label><Icon /><strong>{label}</strong></Form.Label>
            <Form.Control type={type} placeholder={`Ingresa tu ${label.toLowerCase()}`} value={value} onChange={(e) => setValue(e.target.value)} required />
        </Form.Group>
    );

    return (
        <div className="login-container">
            <div className="login-text"><h2>INICIA SESIÓN</h2></div>
            <div className="login-form">
                <Form onSubmit={handleLogin}>
                    {renderInput("Email", "email", email, setEmail, HiOutlineMailOpen)}
                    {renderInput("Contraseña", "password", password, setPassword, TbLockPassword)}
                    {error && <p className="text-danger">{error}</p>}
                    <div className="d-flex justify-content-between">
                        <Button variant="primary" type="submit">Acceder</Button>
                        <Link to="/Registro"><Button variant="secondary">Registrarse</Button></Link>
                    </div>
                </Form>
            </div>
        </div>
    );
}