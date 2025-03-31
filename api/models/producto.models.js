const mongoose = require("mongoose");

const ProductoSchema = new mongoose.Schema({
    nombre: { type: String},
    precio: { type: Number},
    cantidad: { type: Number},
    unidad: { type: String},
    imagen: { type: String },
    createdAT: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Producto", ProductoSchema);