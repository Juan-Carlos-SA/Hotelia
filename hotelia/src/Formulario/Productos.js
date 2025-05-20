

import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import { Button, Form, Row, Col, InputGroup } from "react-bootstrap";
import { initialValues, validationSchema } from "./Productos.form";
import { AdministradorProductosTable } from "../Administrador/Administradorprodu";
import { Producto } from "../api";

const ctrProducto = new Producto();

export function Productos() {
    const [listaProductos, setListaProductos] = useState([]);

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: validationSchema(),
        validateOnChange: false,
        onSubmit: async (formValue) => {
            await ctrProducto.createProduct(formValue);
            await obtenerProductos();
        },
    });

    const obtenerProductos = async () => {
        try {
            const listaPro = await ctrProducto.getProducto();
            console.log("Productos obtenidos después de la actualización:", listaPro); // Verifica los datos obtenidos
            setListaProductos(listaPro);
        } catch (error) {
            console.error("Error al obtener productos:", error);
        }
    };

    const handleDelete = async (productId) => {
        const confirmDelete = window.confirm("¿Estás seguro de que deseas eliminar este producto?");
        if (confirmDelete) {
            await ctrProducto.deleteProducto(productId);
            await obtenerProductos(); 
        }
    };

    const handleUpdate = async (productId, updatedData) => {
        console.log("ID del producto:", productId); 
        console.log("Datos enviados al backend:", updatedData); 
        try {
            await ctrProducto.updateProducto(productId, updatedData);
            await obtenerProductos();
            alert("Producto actualizado correctamente");
        } catch (error) {
            console.error("Error al actualizar el producto:", error);
        }
    };

    useEffect(() => {
        obtenerProductos();
    }, []);

    return (
        <div className="p-4">
            <Form noValidate onSubmit={formik.handleSubmit}>
                <Row className="mb-3">
                    <Form.Group as={Col} md="12">
                        <Form.Label>Nombre de la habitación</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Habitación"
                            name="nombre"
                            onChange={formik.handleChange}
                            value={formik.values.nombre}
                        />
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} md="3">
                        <Form.Label>Costo</Form.Label>
                        <Form.Control
                            type="number"
                            name="precio"
                            placeholder="Costo"
                            value={formik.values.precio}
                            onChange={formik.handleChange}
                        />
                    </Form.Group>
                    <Form.Group as={Col} md="3">
                        <Form.Label>Fecha de estancia</Form.Label>
                        <InputGroup>
                            <Form.Control
                                type="text"
                                name="cantidad"
                                placeholder="Fecha"
                                value={formik.values.cantidad}
                                onChange={formik.handleChange}
                            />
                        </InputGroup>
                    </Form.Group>
                    <Form.Group as={Col} md="3">
                        <Form.Label>Servicios extra</Form.Label>
                        <Form.Control
                            type="text"
                            name="unidad"
                            placeholder="Servicios"
                            value={formik.values.unidad}
                            onChange={formik.handleChange}
                        />
                    </Form.Group>
                    <Form.Group as={Col} md="3">
                        <Form.Label>Imagen</Form.Label>
                        <Form.Control
                            type="file"
                            name="imagep"
                            onChange={(event) =>
                                formik.setFieldValue("imagep", event.currentTarget.files[0])
                            }
                        />
                    </Form.Group>
                </Row>

                <Button type="submit">Enviar</Button>
            </Form>

            <Row>
                <AdministradorProductosTable
                    productos={listaProductos}
                    onDelete={handleDelete}
                    onUpdate={handleUpdate}
                />
            </Row>
        </div>
    );
}
