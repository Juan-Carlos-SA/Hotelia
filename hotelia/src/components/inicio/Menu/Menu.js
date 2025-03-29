import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";

export function Menu() {
    return (
        <Navbar bg="primary" expand="lg">
            <Container>
                <Navbar.Brand as={Link} to="/">< IoHomeOutline /> HOTELIA </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link to="/Iniciosesion" className="btn btn-outline-info" > Inicio de sesión </Link>
                        <Link to="/Registro" className="btn btn-outline-info"> Registro </Link>
                        <Link to="/Servicios" className="btn btn-outline-info"> Servicios </Link>
                    </Nav>
                    <Nav className="ms-auto">
                        <Link to="/Reservas" className="btn btn-outline-info"> Reservas </Link>
                        <Link to="/Administrador" className="btn btn-outline-info"> Administrador </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
