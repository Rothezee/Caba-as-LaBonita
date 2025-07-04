import React from 'react';
import { Container, Row, Col, Accordion, Button } from 'react-bootstrap';

const FAQSection = () => {
  return (
    <section className="py-5" id="preguntas">
      <Container>
        <Row className="mb-4">
          <Col lg={8} className="offset-lg-2 text-center">
            <h2 className="display-4 mb-4">Preguntas Frecuentes</h2>
          </Col>
        </Row>
        
        <Row className="justify-content-center">
          <Col lg={8}>
            <Accordion className="shadow-sm">
              <Accordion.Item eventKey="0" className="mb-3 rounded">
                <Accordion.Header>
                  ¿Cuáles son las políticas de cancelación?
                </Accordion.Header>
                <Accordion.Body>
                  Las políticas de cancelación permiten cancelar con una anticipación mínima de 48
                  horas para un reembolso completo. Para cualquier cancelación fuera de este plazo,
                  consúltanos.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="1" className="mb-3 rounded">
                <Accordion.Header>
                  ¿Se permiten mascotas en las cabañas?
                </Accordion.Header>
                <Accordion.Body>
                  Sí, se permiten mascotas siempre que sean pequeñas y estén bajo supervisión. Hay
                  algunas normas a seguir para garantizar la comodidad de todos.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="2" className="mb-3 rounded">
                <Accordion.Header>
                  ¿Qué formas de pago aceptan?
                </Accordion.Header>
                <Accordion.Body>
                  Aceptamos pagos por transferencia bancaria, tarjetas de crédito y débito, y pagos en
                  efectivo en la recepción. Consultá por promociones y descuentos.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="3" className="mb-3 rounded">
                <Accordion.Header>
                  ¿Qué incluye el desayuno?
                </Accordion.Header>
                <Accordion.Body>
                  El desayuno incluye café, té, jugos naturales, medialunas, y productos caseros
                  elaborados por la familia. Si tenés alguna restricción alimentaria, avisanos con
                  anticipación.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>

            <div className="text-center mt-4">
              <Button 
                href="#cabañas" 
                variant="warning" 
                size="lg" 
                className="text-uppercase fw-bold px-4 py-2"
              >
                ¡Reserva Ahora!
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default FAQSection;