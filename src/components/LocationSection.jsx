import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const LocationSection = () => {
  return (
    <section className="bg-white py-5" id="ubicacion">
      <Container>
        <Row className="mb-4">
          <Col lg={8} className="offset-lg-2 text-center">
            <h2 className="display-4 mb-4">Ubicación</h2>
            <p className="text-muted fst-italic">
              Estamos ubicados en un entorno natural ideal para el descanso.
              Encontranos en el mapa:
            </p>
          </Col>
        </Row>
        
        <Row className="justify-content-center">
          <Col xs={12} lg={10}>
            <div className="shadow-sm rounded">
              <h6 className="fw-semibold text-start mb-2 text-primary">
                📍 Trapiche - San Luis
              </h6>
              <iframe
                className="w-100 rounded"
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d660.2383037758623!2d-66.05839895987509!3d-33.12389038295813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sar!4v1746992016817!5m2!1sen!2sar"
                height="400"
                style={{ border: '4px solid #007bff' }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa ubicación Cabañas La Bonita"
              ></iframe>
              <div className="mt-3">
                <p>
                  <strong>Cómo llegar:</strong> A 300m de la Rotonda de Ingreso de "El Trapiche", sobre
                  "Ruta Provincial Nº39", dirección "La Florida", a 300m antes de llegar al Hospital "Dr.
                  René Favaloro".
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default LocationSection;