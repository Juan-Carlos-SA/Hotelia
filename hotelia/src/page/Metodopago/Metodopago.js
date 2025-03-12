import React, { useState } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import './Metodopago.css';
import { Link } from "react-router-dom";

export function Metodopago() {
    const [selectedDate, setSelectedDate] = useState('');
    const [selectedTime, setSelectedTime] = useState('');

    const handleDateChange = (event) => {
        setSelectedDate(event.target.value);
    };

    const handleTimeChange = (time) => {
        setSelectedTime(time);
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        date.setMinutes(date.getMinutes() + date.getTimezoneOffset());
        return date.toLocaleDateString('es-ES', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
    };

    return (
        <Container className="metodopago-container">
            <Row className="mb-4">
                <Col>
                    <Link to="/catalogo">
                        <Button variant="link" className="back-button">Volver</Button>
                    </Link>
                </Col>
            </Row>
            <Row>
                <Col md={8}>
                    <h2>Suit Residencial</h2>
                    <p>Revisa nuestra disponibilidad y reserva la fecha y hora que más te convengan</p>
                    <h4>Selecciona fecha y hora</h4>
                    <Form>
                        <Form.Group controlId="formDate">
                            <Form.Label>Fecha</Form.Label>
                            <Form.Control type="date" value={selectedDate} onChange={handleDateChange} />
                        </Form.Group>
                        <Form.Group controlId="formTime" className="mt-3">
                            <Form.Label>Hora</Form.Label>
                            <div className="d-flex justify-content-between">
                                <Button variant="outline-secondary" onClick={() => handleTimeChange('8:00 a.m.')}>8:00 a.m.</Button>
                                <Button variant="outline-secondary" onClick={() => handleTimeChange('10:00 a.m.')}>10:00 a.m.</Button>
                                <Button variant="outline-secondary" onClick={() => handleTimeChange('3:00 p.m.')}>3:00 p.m.</Button>
                                <Button variant="outline-secondary" onClick={() => handleTimeChange('7:00 p.m.')}>7:00 p.m.</Button>
                            </div>
                        </Form.Group>
                    </Form>
                </Col>
                <Col md={4}>
                    <h4>Detalles del servicio</h4>
                    <p>Suit Residencial</p>
                    <p>{selectedDate ? `${formatDate(selectedDate)}, ${selectedTime}` : 'Selecciona una fecha y hora'}</p>
                    <p>Holbox</p>
                    <p>Miembro del equipo n.º 1</p>
                    <p>2 h</p>
                    <p>$5,200</p>
                    <Button variant="primary" className="mt-3">¡Reservar ahora!</Button>
                </Col>
            </Row>
        </Container>
    );
}
