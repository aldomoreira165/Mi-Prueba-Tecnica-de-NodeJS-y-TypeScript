const mongoose = require('mongoose');

//definiendo el modelo de alumno
const AlumnoSchema = new mongoose.Schema({
    nombre: String,
    fechaNacimiento: Date,
    nombrePadre: String,
    nombreMadre: String,
    grado: String,
    seccion: String,
    fechaIngreso: Date,
});

const Alumno = mongoose.model('Alumno', AlumnoSchema);

module.exports = Alumno;