import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";

export function Menu() {
    return (
        <Navbar bg="primary" data-bs-theme="dark">
            <Container>
                <Navbar.Brand as={Link} to="/">HOTELIA</Navbar.Brand>
                <Nav className="me-auto">
                    <Link to="/iniciosesion" className="btn btn-outline-info">Inicio de sesión</Link>
                    <Link to="/registro" className="btn btn-outline-info">Registro uwu</Link>
                    <Link to="/catalogo" className="btn btn-outline-info">Catalogo</Link>


                </Nav>
            </Container>
        </Navbar>
    )
}