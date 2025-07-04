import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Banner = () => {
  return (
    <section 
      className="banner d-flex align-items-center justify-content-center text-white position-relative" 
      id="banner"
      style={{
        minHeight: '100vh',
        backgroundImage: 'url(assets/imagenes/COMPLEJO/complejo.webp)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div 
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
          zIndex: 1
        }}
      ></div>
      
      <Container style={{ zIndex: 2 }}>
        <Row className="align-items-center justify-content-center">
          <Col lg={12} className="text-center">
            <div className="banner-content">
              <h1 className="display-1 fw-bold mb-4">
                Cabañas<br />"La Bonita"
              </h1>
              <h2 className="h3 mb-5 text-warning">DESCONECTA, DISFRUTA Y DESCANSA</h2>
              <a 
                href="#cabañas" 
                className="btn btn-warning btn-lg text-uppercase fw-bold px-5 py-3"
                style={{ fontSize: '1.5rem' }}
              >
                ¡Reserva Ahora!
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;