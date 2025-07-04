import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Modal } from 'react-bootstrap';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    message: ''
  });
  const [validated, setValidated] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      setShowConfirmation(true);
      setTimeout(() => {
        setShowConfirmation(false);
        setFormData({
          name: '',
          email: '',
          whatsapp: '',
          message: ''
        });
        setValidated(false);
      }, 3000);
    }
    
    setValidated(true);
  };

  return (
    <>
      <section 
        className="py-5 text-white" 
        id="contacto"
        style={{
          backgroundImage: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
        }}
      >
        <Container>
          <Row className="mb-4">
            <Col lg={8} className="offset-lg-2 text-center">
              <h2 className="display-4 mb-4">Contacto</h2>
              <p>¿Tienes alguna duda o necesitas contarnos algo? No dudes en escribirnos.</p>
            </Col>
          </Row>
          
          <Row className="justify-content-center">
            <Col lg={8}>
              <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Row className="g-4">
                  <Col lg={6}>
                    <Form.Group>
                      <Form.Label>Nombre</Form.Label>
                      <Form.Control
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        pattern="^[A-Za-zÁÉÍÓÚÑáéíóúñ]{2,}(?: [A-Za-zÁÉÍÓÚÑáéíóúñ]+)*$"
                        minLength={3}
                        required
                      />
                      <Form.Control.Feedback type="invalid">
                        Es necesario poner el Nombre
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                  
                  <Col lg={6}>
                    <Form.Group>
                      <Form.Label>E-mail</Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                      <Form.Control.Feedback type="invalid">
                        Es necesario poner el E-mail
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                  
                  <Col lg={6}>
                    <Form.Group>
                      <Form.Label>WhatsApp</Form.Label>
                      <Form.Control
                        type="tel"
                        name="whatsapp"
                        value={formData.whatsapp}
                        onChange={handleInputChange}
                        pattern="^\+?\d{10,15}$"
                        placeholder="+5491123456789"
                        required
                      />
                      <Form.Control.Feedback type="invalid">
                        Es necesario poner el WhatsApp
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                  
                  <Col lg={6}>
                    <Form.Group>
                      <Form.Label>Mensaje</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={4}
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        minLength={10}
                        required
                      />
                      <Form.Control.Feedback type="invalid">
                        Escriba al menos 10 caracteres
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                  
                  <Col lg={6} className="text-center">
                    <Button type="submit" variant="warning" size="lg" className="px-5">
                      Enviar
                    </Button>
                  </Col>
                </Row>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Confirmation Modal */}
      <Modal show={showConfirmation} onHide={() => setShowConfirmation(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>¡Envío exitoso!</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          <p>¡Gracias por escribirnos! Hemos recibido tu mensaje y pronto nos pondremos en contacto contigo.</p>
        </Modal.Body>
        <Modal.Footer className="justify-content-center">
          <Button variant="warning" onClick={() => setShowConfirmation(false)}>
            Aceptar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ContactSection;