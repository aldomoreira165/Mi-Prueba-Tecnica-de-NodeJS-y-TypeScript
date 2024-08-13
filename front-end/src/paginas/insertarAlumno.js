import React, { useState } from "react";
import "../assets/css/insertarAlumno.css";
import axios from "axios";

// credenciales para authentication
const username = 'admin';
const password = 'password';
const token = btoa(`${username}:${password}`);

const headers = {
    'Authorization': `Basic ${token}`
};

export default function InsertarAlumno() {
  const [nombre, setNombre] = useState("");
  const [fechaNacimiento, setFechaNacimiento] = useState("");
  const [nombrePadre, setNombrePadre] = useState("");
  const [nombreMadre, setNombreMadre] = useState("");
  const [grado, setGrado] = useState("");
  const [seccion, setSeccion] = useState("");
  const [fechaIngreso, setFechaIngreso] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const alumno = {
      nombre,
      fechaNacimiento,
      nombrePadre,
      nombreMadre,
      grado,
      seccion,
      fechaIngreso,
    };

    try {
      await axios.post("http://localhost:5000/crear-alumno", alumno, { headers });
      setMensaje("Alumno creado exitosamente");
      // Limpiar formulario después de enviar
      setNombre("");
      setFechaNacimiento("");
      setNombrePadre("");
      setNombreMadre("");
      setGrado("");
      setSeccion("");
      setFechaIngreso("");
    } catch (error) {
      setMensaje("Error al crear alumno");
      console.error("Error al crear alumno", error);
    }
  };

  return (
    <div className="container">
      <div className="container-form">
        <h2>Ingresar Alumno</h2>
        {mensaje && <div className="alert alert-info">{mensaje}</div>}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="nombre" className="form-label">
              Nombre
            </label>
            <input
              type="text"
              id="nombre"
              className="form-control"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="fechaNacimiento" className="form-label">
              Fecha de Nacimiento
            </label>
            <input
              type="date"
              id="fechaNacimiento"
              className="form-control"
              value={fechaNacimiento}
              onChange={(e) => setFechaNacimiento(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="nombrePadre" className="form-label">
              Nombre del Padre
            </label>
            <input
              type="text"
              id="nombrePadre"
              className="form-control"
              value={nombrePadre}
              onChange={(e) => setNombrePadre(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="nombreMadre" className="form-label">
              Nombre de la Madre
            </label>
            <input
              type="text"
              id="nombreMadre"
              className="form-control"
              value={nombreMadre}
              onChange={(e) => setNombreMadre(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="grado" className="form-label">
              Grado
            </label>
            <input
              type="text"
              id="grado"
              className="form-control"
              value={grado}
              onChange={(e) => setGrado(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="seccion" className="form-label">
              Sección
            </label>
            <input
              type="text"
              id="seccion"
              className="form-control"
              value={seccion}
              onChange={(e) => setSeccion(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="fechaIngreso" className="form-label">
              Fecha de Ingreso
            </label>
            <input
              type="date"
              id="fechaIngreso"
              className="form-control"
              value={fechaIngreso}
              onChange={(e) => setFechaIngreso(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Guardar Alumno
          </button>
        </form>
      </div>
    </div>
  );
}
