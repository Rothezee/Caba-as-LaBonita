import React from 'react';
import { Container, Row, Col, Accordion } from 'react-bootstrap';

const AboutComplex = () => {
  return (
    <section className="bg-white py-5" id="complejo">
      <Container>
        <Row className="mb-4">
          <Col lg={8} className="offset-lg-2 text-center">
            <h2 className="display-4 mb-4">Sobre el Complejo</h2>
          </Col>
          
          <Col xs={12}>
            <Row className="justify-content-center align-items-start">
              <Col lg={8} className="mb-4">
                <h3>Tipos de Cabañas</h3>
                <p>
                  En nuestro complejo contamos con <strong>cinco cabañas totalmente equipadas</strong>, ideales
                  para disfrutar en familia o en pareja. A continuación, te presentamos las opciones disponibles:
                </p>
                
                <Accordion className="shadow-sm">
                  <Accordion.Item eventKey="0" className="mb-3 rounded">
                    <Accordion.Header>
                      🛏️ Cabañas chicas (2 unidades)
                    </Accordion.Header>
                    <Accordion.Body>
                      <p><strong>Perfectas para escapadas románticas o grupos pequeños (2–3 personas).</strong></p>
                      <ul>
                        <li>1 dormitorio</li>
                        <li>1 baño privado</li>
                        <li>Cocina-comedor integrados</li>
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="1" className="mb-3 rounded">
                    <Accordion.Header>
                      🏡 Cabañas medianas (2 unidades en planta alta)
                    </Accordion.Header>
                    <Accordion.Body>
                      <p><strong>Ideales para familias pequeñas (4–5 personas), con vista elevada.</strong></p>
                      <ul>
                        <li>1 dormitorio</li>
                        <li>1 baño</li>
                        <li>Cocina-comedor</li>
                        <li>Balcón o galería</li>
                        <li>Hogar a gas</li>
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="2" className="mb-3 rounded">
                    <Accordion.Header>
                      🏠 Cabaña grande (1 unidad)
                    </Accordion.Header>
                    <Accordion.Body>
                      <p><strong>La opción más amplia (5–6 personas), perfecta para grupos o familias numerosas.</strong></p>
                      <ul>
                        <li>2 dormitorios</li>
                        <li>1 baño</li>
                        <li>Cocina y comedor integrados</li>
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="3" className="mb-3 rounded">
                    <Accordion.Header>
                      ✨ Servicios incluidos en todas las cabañas:
                    </Accordion.Header>
                    <Accordion.Body>
                      <Row>
                        <Col md={6}>📺 DirecTV y Wi-Fi compartido</Col>
                        <Col md={6}>🛏️ Ropa de cama y toallas</Col>
                        <Col md={6}>🍽️ Utensilios de cocina completos</Col>
                        <Col md={6}>🔥 Agua caliente, gas, estufas eléctricas y ventilador</Col>
                        <Col md={6}>🥩 Parrillas individuales</Col>
                        <Col md={6}>🚗 Cocheras techadas</Col>
                        <Col md={6}>🍽️ Quincho con parrilla grande y juegos de mesa</Col>
                        <Col md={6}>🔥 Fogón al aire libre</Col>
                        <Col md={6}>🎠 Juegos para niños (hamacas, tobogán)</Col>
                        <Col md={6}>🏊 Piscina y solárium</Col>
                      </Row>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Col>
              
              <Col lg={4} className="position-relative">
                <video 
                  autoPlay 
                  muted 
                  loop 
                  playsInline 
                  className="w-100 rounded shadow"
                  style={{ maxHeight: '400px', objectFit: 'cover' }}
                >
                  <source src="assets/videos/dron.mp4" type="video/mp4" />
                  Tu navegador no soporta videos HTML5.
                </video>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutComplex;