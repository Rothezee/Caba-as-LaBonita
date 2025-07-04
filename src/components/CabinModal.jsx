import React, { useState, useEffect } from 'react';
import { Modal, Button, Form, Row, Col, Badge } from 'react-bootstrap';
import ImageCarousel from './ImageCarousel';
import DateRangeCalendar from './DateRangeCalendar';

const CabinModal = ({ show, onHide, cabin }) => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    telefono: '',
    fechaEntrada: '',
    fechaSalida: '',
    huespedes: '',
    comentario: ''
  });
  
  const [validated, setValidated] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  useEffect(() => {
    if (!show) {
      setFormData({
        nombre: '',
        apellido: '',
        email: '',
        telefono: '',
        fechaEntrada: '',
        fechaSalida: '',
        huespedes: '',
        comentario: ''
      });
      setValidated(false);
    }
  }, [show]);

  const getMaxGuests = (cabinId) => {
    if (cabinId === 1 || cabinId === 2) return 3;
    if (cabinId === 4 || cabinId === 5) return 5;
    return 6;
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
        onHide();
      }, 3000);
    }
    
    setValidated(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  if (!cabin) return null;

  const maxGuests = getMaxGuests(cabin.id);

  return (
    <>
      <Modal show={show} onHide={onHide} size="xl" centered scrollable>
        <Modal.Header closeButton>
          <Modal.Title>{cabin.title} N°{cabin.id}</Modal.Title>
        </Modal.Header>
        
        <Modal.Body>
          <ImageCarousel images={cabin.image} title={cabin.title} />
          
          <Row className="mt-4">
            <Col xl={7}>
              <h5>{cabin.shortDescription}</h5>
              <Badge bg="warning" text="dark" className="mb-2">
                ${cabin.price} / noche
              </Badge>
              <p className="text-dark mb-2">
                <strong>Capacidad:</strong> {cabin.capacity}
              </p>
              <p>{cabin.description}</p>
              
              <h5 className="mt-4 mb-3">Características</h5>
              <ul>
                {cabin.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </Col>
            
            <Col xl={5}>
              <div className="card">
                <div className="card-body">
                  <h5 className="mb-4">Reserva ahora</h5>
                  
                  <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Row className="g-3">
                      <Col xs={12}>
                        <Form.Group>
                          <Form.Label>Nombre/s</Form.Label>
                          <Form.Control
                            type="text"
                            name="nombre"
                            value={formData.nombre}
                            onChange={handleInputChange}
                            pattern="^[A-Za-zÁÉÍÓÚÑáéíóúñ]{2,}(?: [A-Za-zÁÉÍÓÚÑáéíóúñ]+)*$"
                            required
                          />
                          <Form.Control.Feedback type="invalid">
                            Ingrese nombre válido
                          </Form.Control.Feedback>
                        </Form.Group>
                      </Col>
                      
                      <Col xs={12}>
                        <Form.Group>
                          <Form.Label>Apellido/s</Form.Label>
                          <Form.Control
                            type="text"
                            name="apellido"
                            value={formData.apellido}
                            onChange={handleInputChange}
                            pattern="^[A-Za-zÁÉÍÓÚÑáéíóúñ]{2,}(?: [A-Za-zÁÉÍÓÚÑáéíóúñ]+)*$"
                            required
                          />
                          <Form.Control.Feedback type="invalid">
                            Ingrese apellido válido
                          </Form.Control.Feedback>
                        </Form.Group>
                      </Col>
                      
                      <Col xs={12}>
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
                            Ingrese un E-mail válido
                          </Form.Control.Feedback>
                        </Form.Group>
                      </Col>
                      
                      <Col xs={12}>
                        <Form.Group>
                          <Form.Label>Teléfono</Form.Label>
                          <Form.Control
                            type="tel"
                            name="telefono"
                            value={formData.telefono}
                            onChange={handleInputChange}
                            pattern="^\+?\d{10,15}$"
                            required
                          />
                          <Form.Control.Feedback type="invalid">
                            Ingrese un teléfono válido
                          </Form.Control.Feedback>
                        </Form.Group>
                      </Col>
                      
                      <Col xs={12}>
                        <DateRangeCalendar 
                          onDateChange={(startDate, endDate) => {
                            setFormData(prev => ({
                              ...prev,
                              fechaEntrada: startDate,
                              fechaSalida: endDate
                            }));
                          }}
                        />
                      </Col>
                      
                      <Col xs={12}>
                        <Form.Group>
                          <Form.Label>Cantidad de huéspedes</Form.Label>
                          <Form.Select
                            name="huespedes"
                            value={formData.huespedes}
                            onChange={handleInputChange}
                            required
                          >
                            <option value="">Seleccione cantidad</option>
                            {Array.from({ length: maxGuests }, (_, i) => (
                              <option key={i + 1} value={i + 1}>
                                {i + 1} {i === 0 ? 'huésped' : 'huéspedes'}
                              </option>
                            ))}
                          </Form.Select>
                          <Form.Control.Feedback type="invalid">
                            Seleccione una cantidad
                          </Form.Control.Feedback>
                        </Form.Group>
                      </Col>
                      
                      <Col xs={12}>
                        <Form.Group>
                          <Form.Label>Comentario Adicional</Form.Label>
                          <Form.Control
                            as="textarea"
                            rows={3}
                            name="comentario"
                            value={formData.comentario}
                            onChange={handleInputChange}
                            minLength={10}
                          />
                          <Form.Control.Feedback type="invalid">
                            Escriba al menos 10 caracteres
                          </Form.Control.Feedback>
                        </Form.Group>
                      </Col>
                      
                      <Col xs={12} className="text-center">
                        <Button type="submit" variant="warning" size="lg" className="px-5">
                          Enviar
                        </Button>
                      </Col>
                    </Row>
                  </Form>
                </div>
              </div>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>

      {/* Confirmation Modal */}
      <Modal show={showConfirmation} onHide={() => setShowConfirmation(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>¡Envío exitoso!</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          <p>¡Gracias por reservar con nosotros! Pronto nos pondremos en contacto contigo.</p>
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

export default CabinModal;