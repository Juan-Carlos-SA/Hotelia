const mongoose = require("mongoose");

const ProductoSchema = new mongoose.Schema({
    nombre: { type: String},
    precio: { type: Number},
    cantidad: { type: String},
    unidad: { type: String},
    imagep: { type: String },
    createdAT: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Producto", ProductoSchema);