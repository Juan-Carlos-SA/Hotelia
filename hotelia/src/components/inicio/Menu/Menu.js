import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";

export function Menu() {
    return (
        <Navbar bg="primary" data-bs-theme="dark">
            <Container>
                <Navbar.Brand as={Link} to="/">HOTELIA</Navbar.Brand>
                <Nav className="me-auto">
                    <Link to="/Iniciosesion" className="btn btn-outline-info">Inicio de sesión</Link>
                    <Link to="/Registro" className="btn btn-outline-info">Registro</Link>
                    <Link to="/Catalogo" className="btn btn-outline-info">Catalogo</Link>
                    <Link to="/Metodopago" className="btn btn-outline-info">Metodo de pago</Link>

                </Nav>
            </Container>
        </Navbar>
    )
}