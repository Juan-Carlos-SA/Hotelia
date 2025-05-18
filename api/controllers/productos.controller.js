//const productoModels = require('../models/producto.models');
const fs = require('fs');
const path = require('path');
const Producto = require('../models/producto.models');
const { getfilePath } = require("../utils/image");

async function createProducto(req, res) {
    try {
        const productoData = req.body;

        if (req.files && req.files.imagep) {
            productoData.imagep = getfilePath(req.files.imagep);
        }

        const producto = new Producto(productoData);
        const savedProducto = await producto.save();

        res.status(201).send({ message: "Producto creado correctamente", producto: savedProducto });
    } catch (error) {
        console.error("Error al crear producto:", error);
        res.status(500).send({ message: "Error al crear producto" });
    }
}

async function getProducto(req, res) {
    try {
        const productos = await Producto.find();
        const productosConImagen = productos.map((producto) => {
            if (producto.imagep) {
                producto.imagep = `${req.protocol}://${req.get("host")}/${producto.imagep}`;
            }
            return producto;
        });
        res.status(200).send(productosConImagen);
    } catch (error) {
        console.error("Error al obtener productos:", error);
        res.status(500).send({ message: "Error al obtener productos" });
    }
}
async function delProducto(req, res) {
    const { id } = req.params;
    try {
        const producto = await Producto.findById(id);
        if (!producto) {
            return res.status(404).send({ message: "Producto no encontrado" });
        }

        // Verifica si el producto tiene una imagen antes de intentar eliminarla
        if (producto.imagep) {
            const imagePath = path.join(__dirname, '..', producto.imagep);

            fs.unlink(imagePath, (error) => {
                if (error) {
                    console.error("Error al eliminar la imagen:", error);
                    return res.status(500).send({ message: "Error al eliminar la imagen" });
                }
            });
        }

        await Producto.findByIdAndDelete(id);
        res.status(200).send({ message: "Producto eliminado" });
    } catch (error) {
        console.error("Error al eliminar producto:", error);
        res.status(500).send({ message: "Error al eliminar" });
    }
}
async function updateProducto(req, res) {
    const { id } = req.params;
    const updateData = req.body;

    try {
        const producto = await Producto.findById(id);
        if (!producto) {
            return res.status(404).send({ message: "Producto no encontrado" });
        }

        if (req.files && req.files.imagep) {
            // Elimina la imagen anterior si existe
            if (producto.imagep) {
                const oldImagePath = path.join(__dirname, "..", producto.imagep);
                if (fs.existsSync(oldImagePath)) {
                    fs.unlinkSync(oldImagePath);
                }
            }

            // Guarda la nueva imagen
            updateData.imagep = getfilePath(req.files.imagep);
        }

        const updatedProducto = await Producto.findByIdAndUpdate(id, updateData, { new: true });
        res.status(200).send({ message: "Producto actualizado correctamente", producto: updatedProducto });
    } catch (error) {
        console.error("Error al actualizar producto:", error);
        res.status(500).send({ message: "Error al actualizar el producto" });
    }
}

module.exports = {
    createProducto,
    getProducto,
    delProducto,
    updateProducto
}
