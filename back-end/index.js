const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();

const Alumno = require('./models/alumno'); 

const app = express();
app.use(bodyParser.json());

// conectando al cluster de mongo atlas
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(() => {
    console.log('Conectado a Mongo Atlas exitosamente!');
  }).catch((err) => {
    console.error('Error conectando a Mongo Atlas', err);
  });

// endpoint para crear alumno
app.post('/crear-alumno', async (req, res) => {
    try {
        const nuevoAlumno = new Alumno(req.body);
        await nuevoAlumno.save();
        res.status(201).send(nuevoAlumno);
        console.log('Alumno creado correctamente.')
    } catch (error) {
        res.status(400).send(error);
    }
});

// consultar alumnos por grado
app.get('/consultar-alumno/:grado', async (req, res) => {
    try {
        const alumnos = await Alumno.find({ grado: req.params.grado });
        res.status(200).send(alumnos);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Iniciando el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`)
});