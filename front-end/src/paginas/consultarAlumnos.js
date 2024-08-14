import React, { useState, useEffect } from "react";
import Alert from "react-bootstrap/Alert";
import "../assets/css/consultarAlumnos.css";
import axios from "axios";

export default function ConsultarAlumnos() {
  const [grado, setGrado] = useState("");
  const [alumnos, setAlumnos] = useState([]);
  const [mensaje, setMensaje] = useState("");

  // Función para consultar alumnos por grado
  const consultarAlumnos = async () => {
    if (grado === "") {
      setMensaje("Por favor, ingresa un grado.");
      return;
    }

    // Credenciales para la autenticación básica
    const username = "admin";
    const password = "password";
    const token = btoa(`${username}:${password}`);

    const headers = {
      Authorization: `Basic ${token}`,
    };

    try {
      const response = await axios.get(
        `http://localhost:5000/consultar-alumno/${grado}`,
        { headers }
      );
      setAlumnos(response.data);
      setMensaje("");
    } catch (error) {
      setMensaje("Error al consultar alumnos");
      console.error("Error al consultar alumnos", error);
    }
  };

  // Renderizar la lista de alumnos
  const renderAlumnos = () => {
    if (alumnos.length === 0) {
      return <p>No hay alumnos en este grado.</p>;
    }

    return (
      <ul className="lista-alumnos">
        {alumnos.map((alumno) => (
          <li key={alumno._id}>
            {["primary"].map((variant) => (
              <Alert key={variant} variant={variant}>
                <div>
                  <strong>Nombre de alumno:</strong> {alumno.nombre}
                </div>
                <div>
                  <strong>Padre de alumno:</strong> {alumno.nombrePadre}
                </div>
                <div>
                  <strong>Madre de alumno:</strong> {alumno.nombreMadre}
                </div>
                <div>
                  <strong>Fecha de nacimiento:</strong> {alumno.fechaNacimiento.split('T')[0]}
                </div>
                <div>
                  <strong>Grado:</strong> {alumno.grado}
                </div>
                <div>
                  <strong>Sección:</strong> {alumno.seccion}
                </div>
                <div>
                  <strong>Fecha de ingreso:</strong> {alumno.fechaIngreso.split('T')[0]}
                </div>
              </Alert>
            ))}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="main-container">
      <div className="container-searcher">
        <h2>Consultar alumnos por grado</h2>
        {mensaje && <div className="alert alert-info">{mensaje}</div>}
        <div className="input-grade mb-3">
          <input
            type="text"
            id="nombre"
            className="form-control"
            placeholder="Ingresa el grado"
            value={grado}
            onChange={(e) => setGrado(e.target.value)}
            required
          />
          <button onClick={consultarAlumnos} className="btn btn-primary">
            Consultar
          </button>
        </div>
        {renderAlumnos()}
      </div>
    </div>
  );
}
