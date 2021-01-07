const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const clienteSchema = new Schema({
    nombre: String,
    apellido: String,
    domicilio: String,
    limite_credito: Number,
    fecha_alta: String
});

module.exports = mongoose.model('clientes' , clienteSchema);