import React, { useState } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import './Metodopago.css';
import { Link, useLocation } from 'react-router-dom';
import { MdOutlineArrowBackIosNew } from "react-icons/md";

export function MetodoPago() {
    const location = useLocation();
    const [arrivalDate, setArrivalDate] = useState('');
    const [departureDate, setDepartureDate] = useState('');
    const [selectedTime, setSelectedTime] = useState('');
    const [habitacion, setHabitacion] = useState(location.state?.habitacion || '');
    const [precio, setPrecio] = useState(location.state?.precio || 0);

    const handleArrivalDateChange = (event) => setArrivalDate(event.target.value);
    const handleDepartureDateChange = (event) => setDepartureDate(event.target.value);
    const handleTimeChange = (time) => setSelectedTime(time);

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        date.setMinutes(date.getMinutes() + date.getTimezoneOffset());
        return date.toLocaleDateString('es-ES', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
    };

    const handleReservation = () => {
        if (!arrivalDate || !departureDate || !selectedTime) {
            alert('Por favor, selecciona la fecha de llegada, la fecha de salida y la hora de check-out antes de reservar.');
            return;
        }
        alert(`¡Reserva realizada con éxito para la ${habitacion} desde el ${formatDate(arrivalDate)} hasta el ${formatDate(departureDate)} con check-out a las ${selectedTime}!`);
    };

    return (
        <Container className="metodopago-container">
            <Row className="mb-4">
                <Col>
                    <Link to="/catalogo">
                        <Button variant="link" className="back-button"><MdOutlineArrowBackIosNew />Volver</Button>
                    </Link>
                </Col>
            </Row>
            <Row>
                <Col md={8}>
                    <h2>{habitacion || 'Método de Pago'}</h2>
                    <p>Revisa nuestra disponibilidad y reserva la fecha de llegada y salida del hotel que más te convengan</p>
                    
                    <h4>Selecciona la Fecha de Llegada</h4>
                    <Form>
                        <Form.Group controlId="formArrivalDate">
                            <Form.Control type="date" value={arrivalDate} onChange={handleArrivalDateChange} />
                        </Form.Group>
                    </Form>

                    <h4>Selecciona la Fecha de Salida</h4>
                    <Form>
                        <Form.Group controlId="formDepartureDate">
                            <Form.Control type="date" value={departureDate} onChange={handleDepartureDateChange} />
                        </Form.Group>
                        <Form.Group controlId="formTime" className="mt-3">
                        <h4>Hora de Check-Out</h4>
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
                    <p><strong>Habitación:</strong> {habitacion || 'Selecciona una habitación'}</p>
                    <p><strong>Fecha de Llegada:</strong> {arrivalDate ? formatDate(arrivalDate) : 'Selecciona una fecha de llegada'}</p>
                    <p><strong>Fecha de Salida:</strong> {departureDate ? formatDate(departureDate) : 'Selecciona una fecha de salida'}</p>
                    <p><strong>Hora de Check-Out:</strong> {selectedTime || 'Selecciona una hora de salida'}</p>
                    <p><strong>Ubicación:</strong> Holbox</p>
                    <p><strong>Duración de la Estancia:</strong> {arrivalDate && departureDate ? `${Math.ceil((new Date(departureDate).setHours(0, 0, 0, 0) - new Date(arrivalDate).setHours(0, 0, 0, 0)) / (1000 * 60 * 60 * 24))} días` : 'Calculando...'}</p>
                    <p><strong>Precio:</strong> ${precio || '0.00'}</p>
                    <p><strong>Costo Total:</strong> {arrivalDate && departureDate ? `$${Math.ceil((new Date(departureDate).setHours(0, 0, 0, 0) - new Date(arrivalDate).setHours(0, 0, 0, 0)) / (1000 * 60 * 60 * 24)) * precio}` : 'Calculando...'}</p>
                    <Button variant="primary" className="mt-3" onClick={handleReservation}>¡Confirmar Reserva!</Button>
                </Col>
            </Row>
        </Container>
    );
}