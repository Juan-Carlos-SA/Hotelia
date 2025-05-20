import React, { useState } from "react";
import { Button, Table, Modal, Form, Col } from "react-bootstrap";

export function AdministradorProductosTable({ productos = [], onDelete, onUpdate }) {
    const [showModal, setShowModal] = useState(false);
    const [productoSeleccionado, setProductoSeleccionado] = useState(null);

    const handleEditar = (producto) => {
        setProductoSeleccionado(producto);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setProductoSeleccionado(null);
    };

    const handleGuardarCambios = () => {
        if (productoSeleccionado) {
            onUpdate(productoSeleccionado._id, productoSeleccionado);
        }
        handleCloseModal();
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProductoSeleccionado({ ...productoSeleccionado, [name]: value });
    };

    return (
        <>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nombre de la habitación</th>
                        <th>Costo</th>
                        <th>Fecha de estancia</th>
                        <th>Servicios extra</th>
                        <th>Imagen de la habitación</th>
                        <th>Editar reserva</th>
                        <th>Eliminar reserva</th>
                    </tr>
                </thead>
                <tbody>
                    {productos.map((producto, index) => (
                        <tr key={producto.id}>
                            <td>{index + 1}</td>
                            <td>{producto.nombre}</td>
                            <td>${producto.precio}</td>
                            <td>{producto.cantidad}</td>
                            <td>{producto.unidad}</td>
                            <td>
                                {producto.imagep ? (
                                    <img
                                        src={producto.imagep}
                                        alt={producto.nombre}
                                        style={{ width: "190px", height: "150px" }}
                                    />
                                ) : (
                                    "Sin imagen unu"
                                )}
                            </td>
                            <td>
                                <Button variant="success" onClick={() => handleEditar(producto)}>
                                    Editar
                                </Button>
                            </td>
                            <td>
                                <Button variant="danger" onClick={() => onDelete(producto._id)}>
                                    Eliminar
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>

            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Editar Producto</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {productoSeleccionado && (
                        <Form>
                            <Form.Group>
                                <Form.Label>Nombre</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="nombre"
                                    value={productoSeleccionado.nombre || ""}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Costo</Form.Label>
                                <Form.Control
                                    type="number"
                                    name="precio"
                                    value={productoSeleccionado.precio || ""}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Fecha de estancia</Form.Label>
                                <Form.Control
                                    type="number"
                                    name="Fecha"
                                    value={productoSeleccionado.cantidad || ""}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Servicios extra</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="unidad"
                                    value={productoSeleccionado.unidad || ""}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                            <Form.Group as={Col} md="12">
                                <Form.Label>Subir nueva imagen</Form.Label>
                                <Form.Control
                                    type="file"
                                    name="imagep"
                                    onChange={(event) =>
                                        setProductoSeleccionado({
                                            ...productoSeleccionado,
                                            imagep: event.target.files[0], 
                                        })
                                    }
                                />
                            </Form.Group>
                        </Form>
                    )}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Cancelar
                    </Button>
                    <Button variant="primary" onClick={handleGuardarCambios}>
                        Guardar Cambios
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}