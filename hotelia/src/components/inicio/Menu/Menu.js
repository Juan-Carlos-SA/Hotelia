import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";

export function Menu() {
    return (
        <Navbar bg="primary" data-bs-theme="dark">
            <Container>
                <Navbar.Brand as={Link} to="/"> HOTELIA </Navbar.Brand>
                <Nav className="me-auto">
                    <Link to="/Iniciosesion" className="btn btn-outline-info"> Inicio de sesión </Link>
                    <Link to="/Registro" className="btn btn-outline-info"> Registro </Link>
                    <Link to="/Servicios" className="btn btn-outline-info"> Servicios </Link>
                    <Link to="/Reservas" className="btn btn-outline-info Reserva"> Reservas </Link>
                    <Link to="/Administrador" className="btn btn-outline-info Administrador"> Administrador </Link>
                </Nav>
            </Container>
        </Navbar>
    )
}