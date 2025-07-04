import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <>
      {/* Main Footer */}
      <footer className="text-white py-5" style={{ backgroundColor: '#2c3e50' }}>
        <Container>
          {/* Wave Animation */}
          <div className="mb-4">
            <svg 
              viewBox="0 0 1200 120" 
              preserveAspectRatio="none" 
              style={{ height: '60px', width: '100%' }}
            >
              <path 
                d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
                opacity=".25" 
                fill="currentColor"
              />
              <path 
                d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" 
                opacity=".5" 
                fill="currentColor"
              />
              <path 
                d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" 
                fill="currentColor"
              />
            </svg>
          </div>

          <Row className="align-items-center gy-4 text-center">
            {/* Logo */}
            <Col md={3}>
              <a href="#banner">
                <img 
                  src="assets/imagenes/logob.png" 
                  alt="Logo Cabañas La Bonita" 
                  className="img-fluid"
                  style={{ maxHeight: '80px' }}
                />
              </a>
            </Col>
            
            {/* Navigation Links 1 */}
            <Col md={3}>
              <ul className="list-unstyled text-uppercase">
                <li className="mb-2">
                  <a href="#cabañas" className="text-white text-decoration-none fw-bold">
                    Nuestras Cabañas
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#ubicacion" className="text-white text-decoration-none fw-bold">
                    Ubicación
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#galeria" className="text-white text-decoration-none fw-bold">
                    Galería
                  </a>
                </li>
              </ul>
            </Col>
            
            {/* Navigation Links 2 */}
            <Col md={3}>
              <ul className="list-unstyled text-uppercase">
                <li className="mb-2">
                  <a href="#preguntas" className="text-white text-decoration-none fw-bold">
                    Preguntas Frecuentes
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#complejo" className="text-white text-decoration-none fw-bold">
                    Sobre el Complejo
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#contacto" className="text-white text-decoration-none fw-bold">
                    Contacto
                  </a>
                </li>
              </ul>
            </Col>
            
            {/* Social Links */}
            <Col md={3}>
              <div className="d-flex justify-content-center gap-3">
                <a 
                  href="https://wa.me/1234567890" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white fs-3"
                  style={{ transition: 'color 0.3s' }}
                  onMouseEnter={(e) => e.target.style.color = '#25D366'}
                  onMouseLeave={(e) => e.target.style.color = 'white'}
                >
                  <i className="fab fa-whatsapp"></i>
                </a>
                <a 
                  href="https://www.instagram.com/labonita.sanluis" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white fs-3"
                  style={{ transition: 'color 0.3s' }}
                  onMouseEnter={(e) => e.target.style.color = '#E4405F'}
                  onMouseLeave={(e) => e.target.style.color = 'white'}
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>

      {/* Copyright Footer */}
      <footer className="bg-dark text-white text-center py-3">
        <Container>
          <small>
            &copy; Diseño y Desarrollo a cargo de{' '}
            <a href="https://github.com/Rothezee" className="text-warning text-decoration-none">
              Roth Alan
            </a>
            ,{' '}
            <a href="https://github.com/PiaGarces123" className="text-warning text-decoration-none">
              Garces Brocal María P.
            </a>
            {' '}y{' '}
            <a href="https://github.com/FacundoGLeon" className="text-warning text-decoration-none">
              León Facundo
            </a>
            . Todos los derechos reservados.
          </small>
        </Container>
      </footer>
    </>
  );
};

export default Footer;