import React from "react";
import { Button, Table } from "react-bootstrap";

export function AdministradorProductosTable({ productos = [], onDelete }) {
    return (
        <Table striped bordered hover>
           <thead>
                <tr>
                    <th>#</th>
                    <th>Nombre Producto</th>
                    <th>Precio</th>
                    <th>Cantidad</th>
                    <th>Unidad</th>
                    <th>Imagen</th>
                    <th>Editar</th>
                    <th>Eliminar</th>
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
                            {producto.imagen ? (
                                <img
                                    src={producto.imagen}
                                    alt={producto.nombre}
                                    style={{ width: "50px", height: "50px" }}
                                />
                            ) : (
                                "Sin imagen unu"
                            )}
                        </td>
                        <td>
                            <Button variant="success">Editar</Button>
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
    );
}