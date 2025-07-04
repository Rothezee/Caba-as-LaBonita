import React, { useState } from 'react';
import { Form, Row, Col } from 'react-bootstrap';

const DateRangeCalendar = ({ onDateChange }) => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedStartDate, setSelectedStartDate] = useState(null);
  const [selectedEndDate, setSelectedEndDate] = useState(null);

  const today = new Date().toISOString().split('T')[0];

  const handleStartDateChange = (e) => {
    const date = e.target.value;
    setStartDate(date);
    setSelectedStartDate(new Date(date));
    
    // Set minimum end date to next day
    const nextDay = new Date(date);
    nextDay.setDate(nextDay.getDate() + 1);
    document.getElementById('endDateInput').min = nextDay.toISOString().split('T')[0];
    
    onDateChange(date, endDate);
  };

  const handleEndDateChange = (e) => {
    const date = e.target.value;
    setEndDate(date);
    setSelectedEndDate(new Date(date));
    onDateChange(startDate, date);
  };

  const calculateNights = () => {
    if (startDate && endDate) {
      const start = new Date(startDate);
      const end = new Date(endDate);
      const diffTime = Math.abs(end - start);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      return diffDays;
    }
    return 0;
  };

  return (
    <div className="mb-3">
      <h6 className="mb-3">Selecciona tu Rango de Fechas</h6>
      
      <Row className="g-3">
        <Col md={6}>
          <Form.Group>
            <Form.Label>Fecha de Entrada</Form.Label>
            <Form.Control
              type="date"
              value={startDate}
              onChange={handleStartDateChange}
              min={today}
              required
            />
          </Form.Group>
        </Col>
        
        <Col md={6}>
          <Form.Group>
            <Form.Label>Fecha de Salida</Form.Label>
            <Form.Control
              id="endDateInput"
              type="date"
              value={endDate}
              onChange={handleEndDateChange}
              min={today}
              required
            />
          </Form.Group>
        </Col>
      </Row>

      {startDate && endDate && (
        <div className="mt-3 p-3 bg-light rounded">
          <h6>Rango Seleccionado</h6>
          <p className="mb-1"><strong>Entrada:</strong> {new Date(startDate).toLocaleDateString('es-ES')}</p>
          <p className="mb-1"><strong>Salida:</strong> {new Date(endDate).toLocaleDateString('es-ES')}</p>
          <p className="mb-0"><strong>Noches:</strong> {calculateNights()}</p>
        </div>
      )}
    </div>
  );
};

export default DateRangeCalendar;