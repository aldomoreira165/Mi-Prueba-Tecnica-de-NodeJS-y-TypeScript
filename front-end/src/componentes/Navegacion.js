import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../assets/css/navegacion.css'

export default function Navegacion() {
    return (
        <Navbar collapseOnSelect expand="lg" className="bg-dark" variant="dark">
            <Container>
                <div className='container-name'>
                    <Navbar.Brand href="/"><strong>Control de Estudiantes</strong></Navbar.Brand>
                </div>
                <div className='container-dropdown'>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <NavDropdown title="Opciones" id="collapsible-nav-dropdown">
                                <NavDropdown.Item href="/consultarAlumno" className="text-dark" >Consultar Alumnos</NavDropdown.Item>
                                <NavDropdown.Item href="/" className="text-dark">Agregar Alumno</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Container>
        </Navbar >
    );
}