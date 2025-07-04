import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const Navigation = () => {
  return (
    <Navbar expand="lg" className="navbar-light fixed-top shadow-sm" style={{ backgroundColor: 'white' }}>
      <Container>
        <Navbar.Brand href="#banner" aria-label="Ir al banner principal">
          <img 
            src="assets/imagenes/logo.png" 
            id="logo" 
            alt="Logo Cabañas La Bonita" 
            className="img-fluid"
            style={{ height: '50px' }}
          />
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="navbarNav" />
        
        <Navbar.Collapse id="navbarNav">
          <Nav className="ms-auto text-uppercase">
            <Nav.Link href="#complejo" className="fw-bold">Sobre el Complejo</Nav.Link>
            <Nav.Link href="#cabañas" className="fw-bold">Nuestras Cabañas</Nav.Link>
            <Nav.Link href="#galeria" className="fw-bold">Galería</Nav.Link>
            <Nav.Link href="#ubicacion" className="fw-bold">Ubicación</Nav.Link>
            <Nav.Link href="#contacto" className="fw-bold">Contacto</Nav.Link>
            <Nav.Link href="#preguntas" className="fw-bold">Preguntas Frecuentes</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;