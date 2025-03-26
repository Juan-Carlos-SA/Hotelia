import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";

export function Menu() {
    return (
        <Navbar bg="primary">
            <meta className='viewport' content='width=device-width, user-scalable=no, initial-scalable=1.0,maximum-scale=1.0, minimum-scale=1.0'/>
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